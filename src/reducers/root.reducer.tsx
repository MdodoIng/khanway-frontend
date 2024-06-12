import { combineReducers } from 'redux';
import ModalReducer from "@reducer/modal.reducer.tsx";
import AuthReducer from "@reducer/auth.reducer.tsx";

const RootReducer = combineReducers({
    ModalReducer,
    AuthReducer
})

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;