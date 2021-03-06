import { initialState as ProductsDefaultState } from "../ducks/reducers/productReducer";
import { initialState as UsersDefaultState } from "../ducks/reducers/userReducer";
import { initialState as FiltersDefaultState } from "../ducks/reducers/filterReducer";

export default {
  products: ProductsDefaultState,
  user: UsersDefaultState,
  filters: FiltersDefaultState
};
