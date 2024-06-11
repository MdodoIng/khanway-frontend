import {CurrencyExchange} from "@graphql/graphql.ts";
import {createAction} from "typesafe-actions";

export const ON_UPDATE_CURRENCY = "common/ON_UPDATE_CURRENCY" as const;
export const ON_UPDATE_CURRENCY_UNIT = "common/ON_UPDATE_CURRENCY_UNIT" as const;

export const onUpdateCurrencyAction = createAction(ON_UPDATE_CURRENCY)<CurrencyExchange>();
export const onUpdateCurrencyUnitAction = createAction(ON_UPDATE_CURRENCY_UNIT)<string>();