import {countryCodes} from "@helper/country.codes.tsx";

export const getDateFormat = (date: Date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}

export const getCounty = (code: string) => {
    for (let country of countryCodes) {
        if (country.value === `${code}`)
            return country.label;
    }
}

export const addComma = (num: number) => {
    if (num === 0)
        return "0";
    // /\B(?=(\d{3})+(?!\d))/g
    if (num.toString().includes('.'))
        return num.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const setPhoneFormat = (countryCode: string, phone: string) => {
    if (countryCode === '+82') {
        if (phone.indexOf('82') === 0)
            phone = phone!.substring(2);
        if (phone.indexOf('+82') === 0)
            phone = phone!.substring(3);
    }
    if (phone.at(0) === '0')
        phone = phone!.substring(1);
    return phone;
}

export const verifyPhoneFormat = (countryCode: string, phone: string) => {
    if (countryCode === '+82') {
        if (phone.indexOf('82') === 0)
            return false;
    }
    return true;
}

export const removeTrailingZeros = (input: string) => {
    // 숫자로 변환한 후 다시 문자열로 변환하여 불필요한 0을 제거
    const num = Number(input);
    // NaN이거나 변환이 제대로 되지 않았을 경우 원본 문자열 반환
    if (isNaN(num)) {
        return input;
    }
    // 변환된 숫자를 문자열로 다시 변환
    return num.toString();
}