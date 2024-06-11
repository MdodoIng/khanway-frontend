import { default as axios } from 'axios'
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {useTranslation} from "react-i18next";

const getHeader = () => {
    const token = sessionStorage.getItem('khanway_access_token') || localStorage.getItem('khanway_access_token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

export const get = (path: string) => axios.get(import.meta.env.VITE_SNS_API_PREFIX + path, getHeader()).then((response) => {
    if (!response.data || response.status !== 200) {
        const {t} = useTranslation();
        onErrorSwal(t('common.error'), response.data?.error?.message ?? "Network error, please try again later", undefined, undefined, () => window.location.reload());
        return;
    } else
        return response.data;
}).catch(_error => {
    const {t} = useTranslation();
    onErrorSwal(t('common.error'), "Network error, please try again later", undefined, undefined, () => window.location.reload());
    throw _error
});

export const post = (path: string, data?: any) => axios.post(import.meta.env.VITE_SNS_API_PREFIX + path, data, getHeader()).then((response) => {
    console.log('Response: ', response.data)
    console.log('Response: ', response.status)
    if (!response.data || response.status === 401 || response.status === 403 || response.status === 500) {
        const {t} = useTranslation();
        onErrorSwal(t('common.error'), response.data?.error?.message ?? "Network error, please try again later", undefined, undefined, () => window.location.reload());
        return;
    } else
        return response.data;
}).catch(_error => {
    console.log('error: ', _error);
    const {t} = useTranslation();
    onErrorSwal(t('common.error'), "Network error, please try again later", undefined, undefined, () => window.location.reload());
    throw _error
})