import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import {UserSns} from "@graphql/graphql.ts";
import {VerifyReferralType} from "@component/verify.referral.tsx";
import Box from '@mui/material/Box';
import {styled} from "@mui/material";
import {useTranslation} from "react-i18next";

export type VerifyReferralStateProps = {
    userSNS: UserSns;
    type: VerifyReferralType;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const VerifyReferralState = (props: VerifyReferralStateProps) => {
    const {t} = useTranslation();
    const {userSNS, type} = props;

    const progress = type === VerifyReferralType.Authentication ? userSNS.referralVerifyCount! * 100 : userSNS.referralVerifyCount! * 33.33;

    return (
        <div className="md-con mb-3">
            <Box sx={{ width: '100%' }}>
                <BorderLinearProgress variant="determinate" value={progress} />
                <div className={"d-flex justify-items-center mt-3 px-1"}>
                    <span>{t('referral_modal.state')}</span>
                    <span className={"ms-auto"}>{userSNS.referralVerifyCount} {t('referral_modal.unit')} / {type === VerifyReferralType.Authentication ? `1 ${t('referral_modal.unit')}` : `3 ${t('referral_modal.unit')}`}</span>
                </div>
            </Box>
        </div>
    )
}

export default VerifyReferralState;