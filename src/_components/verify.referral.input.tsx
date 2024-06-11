import {IconButton, Paper} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import {Check, Close, Search} from "@mui/icons-material";
import {useState} from "react";
import {getErrorMessage} from "@helper/error.message.tsx";
import {CircularProgress} from "@mui/joy"
import {t} from "i18next";
import {onErrorSwal} from "@helper/swal.handler.tsx";
import {verifyReferralUser} from "../service/sns.service.tsx";

export type ReferralInputProps = {
    referralList: Array<string>;
    setReferralList: (value: Array<string>) => void;
}

const VerifyReferralInput = (props: ReferralInputProps) => {
    const {referralList, setReferralList} = props;
    const [referralUser, setReferralUser] = useState<string>();
    const [isVerified, setIsVerified] = useState<boolean|undefined>();
    const [error, setError] = useState<string|undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    // const [verifyReferralUser, { loading}] = useVerifyReferralUserLazyQuery();

    const onClickVerity = () => {
        if (referralList.length > 0) {
            const isExist = referralList.includes(referralUser!);
            if (isExist) {
                setError('ALREADY_VERIFIED');
                return;
            }
        }
        setLoading(true);
        verifyReferralUser({
            email: referralUser!
        }).then(response => {
            setLoading(false);
            if (!response)
                onErrorSwal(t('common.error'), getErrorMessage('NO_RESPONSE_DATA'));
            else if (response.error || !response.isVerified) {
                setError(response.error?.code!);
                setIsVerified(false);
                setTimeout(() => setIsVerified(undefined), 3000)
            } else {
                setReferralList([...referralList, referralUser!]);
                setError(undefined);
                setIsVerified(true);
            }
        });
    }

    const getIcon = () => {
        if (loading)
            return <CircularProgress variant="solid" size={"sm"} />;
        else if (isVerified)
            return <Check color={"success"}/>;
        else if (isVerified === false)
            return <Close color={"error"}/>;
        else
            return <Search color={"primary"}/>;
    }

    const onEnterCatch = (e: any) => {
        if (e.key === 'Enter') onClickVerity();
        else return;
    }

    return (
        <>
            <Paper sx={{p: '2px 4px', marginTop: '5px', display: 'flex', alignItems: 'center', width: "100%", boxShadow: 'none', border: '1px solid #ced4da'}}>
                <InputBase
                    onSubmit={(e) => e.preventDefault()}
                    color={"primary"}
                    disabled={isVerified}
                    sx={{ml: 1, flex: 1}}
                    placeholder={t('sns_verify.referral_input_hint')}
                    inputProps={{'aria-label': 'search google maps'}}
                    onKeyDown={(e) => onEnterCatch(e)}
                    onChange={(e) => setReferralUser(e.target.value)}
                />
                <IconButton type="button"
                            color={"primary"}
                            disabled={isVerified}
                            style={{color: "#1976d2", backgroundColor: ""}}
                            sx={{p: '10px', color: "primary"}}
                            onClick={onClickVerity}
                            aria-label="search">
                    {getIcon()}
                </IconButton>
            </Paper>
            {
                error && <small style={{color: "#DC3545"}} className={"w-100"}>{getErrorMessage(error)}</small>
            }
        </>
    )
}

export default VerifyReferralInput;