import { Product } from '../services/api';

export type RootStackParamList = {
  Main: undefined;
  ProductList: { category: string };
  ProductDetail: { product: Product };
};

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
  Orders: undefined;
  Profile: undefined;
};
