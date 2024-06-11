import {CurrencyExchange} from "@graphql/graphql.ts";
import * as actions from "@action/common.action";
import {ActionType} from "typesafe-actions";

export type CommonState = {
    currency?: CurrencyExchange;
    currencyUnit: string;
    currencySymbol: string;
}

export type CommonAction = ActionType<typeof actions>;
