import {CommonAction, CommonState} from "@type/common.type.tsx";
import {getCurrencySymbol} from "@helper/currency.handler.tsx";
import {createReducer} from "typesafe-actions";
import {ON_UPDATE_CURRENCY, ON_UPDATE_CURRENCY_UNIT} from "@action/common.action.tsx";

const initialState: CommonState = {
    currency: undefined,
    currencyUnit: "USD",
    currencySymbol: getCurrencySymbol("USD")
}

const CommonReducer = createReducer<CommonState, CommonAction>(initialState, {
    [ON_UPDATE_CURRENCY]: (state, action) => ({
        ...state,
        currency: action.payload,
    }),
    [ON_UPDATE_CURRENCY_UNIT]: (state, action) => ({
        ...state,
        currencyUnit: action.payload,
        currencySymbol: getCurrencySymbol(action.payload),
    }),
});

export default CommonReducer;