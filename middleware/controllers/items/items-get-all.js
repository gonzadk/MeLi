'use strict';

import axios from 'axios';
import * as _ from 'lodash';
import { AUTHOR, ItemRoutes } from './items.constants';
import { generateGenericItem } from './items.utils';

/**
 * Performs a request to get all the items that match with the given query
 * @param request
 * @param response
 * @constructor
 */
export function GetAllItems(request, response) {
  const { q: queryParams } = request.query;

  if (!queryParams) {
    response.status(500).send({ error: 'Query is required to perform this action' });
    return;
  }

  runGetAllItems(queryParams)
    .then(products => response.status(200).send(products))
    .catch(error => response.status(500).send({ error }));
}

/**
 * Calls to the API to get all the items matching with the query and returns a parsed response
 * @param queryParams
 * @returns {Promise<{author, categories, items}>}
 */
async function runGetAllItems(queryParams) {
  const requestPromises = await Promise.all([
    axios.get(`${ItemRoutes.ALL}${queryParams}`),
    axios.get(ItemRoutes.CURRENCIES)
  ]);
  const [searchResponse, currencies] = requestPromises;

  return parseResults(searchResponse.data, currencies.data);
}

/**
 * Generates the final response to be returned
 * @param searchResponse
 * @param currencies
 * @returns {{author: {name, lastname}, categories: (*|Array), items: *}}
 */
function parseResults(searchResponse, currencies) {
  const categories = getCategories(searchResponse);
  const items = getItems(searchResponse, currencies);

  return {
    author: AUTHOR,
    categories,
    items
  };
}

/**
 * Returns an array with the available category names
 * @param searchResponse
 * @returns {*}
 */
function getCategories(searchResponse) {
  if (searchResponse.filters && searchResponse.filters.length > 0) {
    const categoryFilter = _.find(searchResponse.filters, { id: 'category' });
    return _.flatMap(
      categoryFilter.values,
      category => _.map(category.path_from_root, subCategory => subCategory.name)
    );
  } else {
    return [];
  }
}

/**
 * Returns the raw value for the item
 * @param searchResponse
 * @param currencies
 * @returns {*}
 */
function getItems(searchResponse, currencies) {
  return _.chain(searchResponse.results)
    .take(4)
    .map(item => generateGenericItem(item, currencies))
    .value();
}
