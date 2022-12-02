import { combineReducers } from "redux";
import getIsInfo from "./isInfo";
import getIsOpenModalBox from "./isOpenModalBox";

const rootReducer = combineReducers({
    getIsInfo,
    getIsOpenModalBox
})

export default rootReducer;
