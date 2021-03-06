import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CategoryReducer from "./CategoryReducer"
import CartReducer from "./CartReducer"

const rootReducer=combineReducers({
      auth:AuthReducer,
      category:CategoryReducer,
      cart:CartReducer,
});

export default rootReducer;