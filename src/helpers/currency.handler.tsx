import {CurrencyExchange} from "@graphql/graphql.ts";

export const getCurrency = () => localStorage.getItem('khanway_currency') || 'USD';

export const getCurrencySymbol = (unit: string) => {
    if (unit === 'USD') return '$';
    if (unit === 'KRW') return '₩';
    if (unit === 'INR') return '₹';
    return '$';
}

export const getCurrencyValue = (currencyUnit: string, value: number, currency: CurrencyExchange) => {
    if (currencyUnit === 'USD')
        return value;
    return value * parseInt(currency.value!);
}