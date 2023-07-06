import { combineReducers } from "redux";
import bookTicketsReducer from "./bookTicketsReducer";

const rootReducer = combineReducers({
  bookTicketsReducer,
});

export default rootReducer;
