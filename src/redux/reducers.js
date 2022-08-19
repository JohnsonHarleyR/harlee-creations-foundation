import { combineReducers } from "redux";
import { UserReducer as user } from "../common/components/user/redux";
import { LayoutReducer as layout } from '../common/components/layout/MainLayout/redux';

const rootReducer = combineReducers({
  user,
  layout,
});

export default rootReducer;