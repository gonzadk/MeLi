const SERVER_URI = 'https://api.mercadolibre.com';

export const ItemRoutes = {
  ALL: `${SERVER_URI}/sites/MLA/search?q=`,
  BY_ID: `${SERVER_URI}/items/`,
  CURRENCIES: `${SERVER_URI}/currencies`,
  DESCRIPTION: '/description'
};

export const AUTHOR = { name: 'Gonzalo', lastname: 'Terzano' };
