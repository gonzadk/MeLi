'use strict';

import axios from 'axios';
import * as _ from 'lodash'
import { AUTHOR, ItemRoutes } from './items.constants';
import { generateGenericItem } from './items.utils';

/**
 * Performs a request to get the item for the requested id
 * @param request
 * @param response
 * @constructor
 */
export function GetItemById(request, response) {
  const { id } = request.params;

  if (!id) {
    response.status(500).send({ error: 'Id is required to perform this action' });
    return;
  }

  runGetItemById(id)
    .then(productInfo => response.status(200).send(productInfo))
    .catch(error => response.status(500).send({ error }));
}

/**
 * Calls to the API to get the item data and description for the requested id,
 * then call to parse the retrieved data
 * @param id
 * @returns {Promise<{author, item}>}
 */
async function runGetItemById(id) {
  const requestPromises = await Promise.all([
    axios.get(`${ItemRoutes.BY_ID}${id}`),
    axios.get(`${ItemRoutes.BY_ID}${id}${ItemRoutes.DESCRIPTION}`),
    axios.get(ItemRoutes.CURRENCIES)
  ]);

  const [searchResponse, descriptionResponse, currencies] = requestPromises;

  return parseResults(searchResponse.data, descriptionResponse.data, currencies.data);
}

/**
 * Given an item, the description and the available currencies, generates an item with the correct
 * structure to be returned
 * @param searchResponse
 * @param descriptionResponse
 * @param currencies
 * @returns {{author: {name, lastname}, item: *}}
 */
function parseResults(searchResponse, descriptionResponse, currencies) {
  const item = getItem(searchResponse, descriptionResponse, currencies);

  return {
    author: AUTHOR,
    item
  };
}

/**
 * Returns the raw value for the item
 * @param searchResponse
 * @param descriptionResponse
 * @param currencies
 * @returns {*}
 */
function getItem(searchResponse, descriptionResponse, currencies) {
  const item = generateGenericItem(searchResponse, currencies);

  return _.defaults(item, {
    sold_quantity: searchResponse.sold_quantity,
    description: descriptionResponse.plain_text
  });
}
