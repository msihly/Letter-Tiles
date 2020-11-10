import { combineReducers } from "redux";
import modals from "./modals";
import inputs from "./inputs";
import observers from "./observers";
import tiles from "./tiles";

const rootReducer = combineReducers({ modals, inputs, observers, tiles });

export default rootReducer;