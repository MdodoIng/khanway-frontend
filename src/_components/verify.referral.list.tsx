import {User, UserSns} from "@graphql/graphql.ts";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export type VerifyReferralStateProps = {
    userSNS: UserSns;
}

const VerifyReferralList = (props: VerifyReferralStateProps) => {
    const {t} = useTranslation();
    const {userSNS} = props;

    const getItem = (key: number, user: User) => {
        return (
            <ListItem key={key} alignItems="flex-start" className={"my-3"} style={{border: '1px solid #f0f0f0', borderRadius: '14px', backgroundColor: '#fff'}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.profileImage ?? '/images/anonymous.png'} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.nickname}
                    secondary={user.email}
                />
            </ListItem>
        )
    }

    return (
        <div className="md-con mb-3">
            <Typography variant="subtitle1" className={"mb-1"} style={{color: "#8D8D8D"}}>{t('referral_modal.subtitle_01')}</Typography>
            <List sx={{ width: '100%', borderRadius: '16px', padding: 0 }}>
                {
                    userSNS.referralUser?.map((user, index) => getItem(index, user))
                }
            </List>
        </div>
        )
}

export default VerifyReferralList;