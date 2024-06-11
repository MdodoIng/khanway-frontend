import Swal from "sweetalert2";
import {t} from "i18next";
export const onOpenSwal = (icon: any, title: string, text?: string, confirmButtonText?: string, cancelButtonText?: string, callback?: () => void) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: confirmButtonText ? confirmButtonText : t('common.ok'),
        cancelButtonText: cancelButtonText,
        showCancelButton: cancelButtonText ? true : false,
    }).then(() => {
        if (callback) callback();
    });
}

export const onSuccessSwal = (title: string, text: string, successText?: string, cancelText?: string, callback?: () => void) => onOpenSwal('success', title, text, successText, cancelText, callback);
export const onErrorSwal = (title: string, text: string, successText?: string, cancelText?: string, callback?: () => void) => onOpenSwal('error', title, text, successText, cancelText, callback);
export const onInfoSwal = (title: string, text?: string, successText?: string, cancelText?: string, callback?: () => void) => onOpenSwal('info', title, text, successText, cancelText, callback);