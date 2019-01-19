export interface SearchResults {
  author: Author;
  categories: string[];
  items: Item[]
}

export interface ProductResutls {
  author: Author;
  items: Item[]
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  picture: string;
  free_shipping: boolean;
  state: string;
  condition: ItemCondition;
  price: ItemPrice;
  description?: string;
}

export interface ItemPrice {
  currency: string,
  amount: number,
  decimals: number
}

export enum ItemCondition {
  NEW = 'new',
  USED = 'used'
}
