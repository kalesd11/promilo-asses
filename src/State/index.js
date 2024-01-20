import { combineReducers } from "redux";
import dataReducer from "./reducers";

const rootReducers = combineReducers({
    loginData : dataReducer
})


export default rootReducers;