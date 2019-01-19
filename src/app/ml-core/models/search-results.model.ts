export interface SearchResults {
  author: Author;
  categories: string[];
  items: Item[]
}

export interface ItemResults {
  author: Author;
  item: Item
}

export interface Author {
  lastname: string;
  name: string;
}

export interface Item {
  condition: ItemCondition;
  description?: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  sold_quantity?: number;
  state: string;
  title: string;
  price: ItemPrice;
}

export interface ItemPrice {
  amount: number,
  currency: string,
  decimals: number
}

export enum ItemCondition {
  NEW = 'new',
  USED = 'used'
}

export enum ItemConditionTranslated {
  NEW = 'Nuevo',
  USED = 'Usado'
}
