import { combineReducers } from "redux";

import homeReducer from "./containers/home/reducer";

export default function createReducer(){
    return combineReducers({
        home: homeReducer
    });
}