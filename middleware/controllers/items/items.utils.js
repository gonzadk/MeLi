import * as _ from "lodash";

/**
 * Given a complete item result, it will be parsed to return an item with a generic structure
 * @param item
 * @param currencies
 * @returns {{id: *, title: string, picture: *, condition: *, free_shipping: *,
 * price: {currency: SVGSymbolElement, amount: (price|{currency, amount, decimals}), decimals: *}}}
 */
export function generateGenericItem(item, currencies) {
  const currency = _.find(currencies, { id: item.currency_id });

  return {
    id: item.id,
    title: item.title,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: _.get(item, 'shipping.free_shipping', false),
    state: _.get(item, 'seller_address.state.name'), // Added since it's necessary to show the city
    price: {
      currency: currency.symbol,
      amount: item.price,
      decimals: currency.decimal_places
    }
  };
}
