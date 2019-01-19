export interface SearchResults {
  author: Author;
  categories: string[];
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
  condition: ItemCondition;
  free_shipping: boolean;
  price: ItemPrice;
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
