import { ADD, DELETE, EDIT, FETCHING } from "./actionTypes";
import { fetching } from "./productActions";
const initialState=[]
const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCHING:
        return[...action.payload];
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((prod) => prod.id != action.payload.id);
    case EDIT:
      return state.map((prod) =>
        prod.id == action.payload.id ? { ...prod, ...action.payload } : prod
      );
      default:return state
  }
};
export default productReducer;
