import {t} from "i18next";

export const getErrorMessage = (error: string) => {
    console.log('error: ', error)
    switch (error) {
        case 'NOT_FOUND':
            return 'Not Found';
        case 'NO_RESPONSE_DATA':
            return t('error.no_response_data');
        case 'USER_NOT_FOUND':
            return t('error.user_not_found');
        case 'REFERRAL_USER_NOT_FOUND':
            return t('error.not_found_referral_user');
        case 'SELF_REFERRAL':
            return t('error.self_referral')
        case 'ALREADY_VERIFIED':
            return t('error.already_verified')
        case 'NOT_SNS_MISSION_COMPLETE':
            return t('error.not_sns_mission_complete')
        case 'TWITTER_ACCESS_TOKEN_REQUIRED':
            return t('error.twitter_access_token_required')
        case 'EVENT_SILVER_ALREADY_ISSUED':
            return t('error.event_silver_already_issued');
        case 'EVENT_SILVER_MISSION_NOT_COMPLETED':
            return t('error.event_silver_mission_not_completed');
        case 'CLIPBOARD_WRITE_ERROR':
            return t('error.clipboard_write_error');
        case 'NO_NICE_DATA':
            return t('error.no_nice_data');
        case 'INVALID_NICE_DATA':
            return t('error.invalid_nice_data');
        case 'NOT_OWNER':
            return t('error.not_owner');
        case 'SAME_STATE':
            return t('error.same_state');
        case 'NOT_SUCCESS_STATE':
            return t('error.not_success_state');
        case 'NOT_KYC_VERIFIED':
            return t('error.not_kyc_verified');
        case 'NOT_TRADED':
            return t('error.not_traded');
        case 'PENDING_PAYMENT':
            return t('error.nft_state_pending');
        default:
            return 'Network error, please try again later';
    }
}