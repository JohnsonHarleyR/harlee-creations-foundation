import { combineReducers } from "redux";
import { LayoutReducer as layout } from '../common/components/layout/MainLayout/redux';

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;