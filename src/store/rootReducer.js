import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

//tüm stateleri topladığımız yer..
const rootReducer = combineReducers({
    cart:cartReducer,
    
})

export default rootReducer;
//CONST Kullanılırsa dışarı default olarak çıkartmak için yazılır.