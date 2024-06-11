import { combineReducers } from 'redux';
import ModalReducer from "@reducer/modal.reducer.tsx";
import AuthReducer from "@reducer/auth.reducer.tsx";
import CommonReducer from "@reducer/common.reducer.tsx";

const RootReducer = combineReducers({
    ModalReducer,
    AuthReducer,
    CommonReducer
})

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;