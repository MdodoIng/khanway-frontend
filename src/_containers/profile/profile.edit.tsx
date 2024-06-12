import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reducer/root.reducer.tsx";
import {getCounty, getDateFormat} from "@helper/data.util.tsx";
import {useNavigate} from "react-router-dom";
import {
    EditUserInput,
    useEditUserMutation,
    useFindUserByNicknameQuery, useGetUserLazyQuery,
    useVerifyPasswordQuery
} from "@graphql/graphql.ts";
import {useEffect, useState} from "react";
import {setUserAction} from "@action/auth.action.tsx";
import {useTranslation} from "react-i18next";

const ProfileEditComponent = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state: RootState) => state.AuthReducer);
    const [onEditUser] = useEditUserMutation();
    const [onGetUser] = useGetUserLazyQuery();
    const [editUserInput, setEditUserInput] = useState<EditUserInput>({
        id: user!.id!,
        newName: undefined,
        password: undefined,
        newPassword: undefined,
        profileImage: undefined
    });
    const [newPassword, setNewPassword] = useState<string>('')
    const passwordData = useVerifyPasswordQuery(
        {
            variables: {
                input: {
                    password: editUserInput.password!,
                }
            }
        })
    const nicknameData = useFindUserByNicknameQuery({
        variables: {
            input: {
                nickname: editUserInput.newName!
            }
        }
    })
    const [nicknameState, setNicknameState] = useState<boolean>(true);
    const [passwordState, setPasswordState] = useState<boolean>(true);
    const [regex, setRegex] = useState<boolean>(true);
    const [checkPassword, setCheckPassword] = useState<boolean>(false);
    const editUser = (value: { [key: string]: string | number | File }) => {
        return setEditUserInput({...editUserInput, ...value});
    }
    const onClickSave = async () => {
        if (editUserInput.newName && nicknameData.data?.findUserByNickname.user)
            return setNicknameState(false);
        else if(editUserInput.password && !passwordData.data?.verifyPassword.verify)
            return setPasswordState(false)
        else if(editUserInput.newPassword && !regex)
            return setRegex(false)
        else if(editUserInput.newPassword && (!checkPassword || !editUserInput.password))
            return setCheckPassword(false)
        else{
            onEditUser({
                variables: {
                    input: editUserInput
                }
            }).then((_response) => {
                onGetUser({
                    variables: {
                        input: {
                            id: user!.id!
                        }
                    }
                }).then( response => response.data?.getUser.user && dispatch(setUserAction(response.data.getUser.user)))
                    .then(() => navigate('/profile'))
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    useEffect(() => {
        setCheckPassword(editUserInput.newPassword === newPassword);
        if(editUserInput.newPassword !== undefined)
            setRegex(editUserInput.newPassword!.match(passwordRegex) !== null);
    }, [editUserInput.newPassword, newPassword])

    const [imageUrl, setImageUrl] = useState<string | undefined>(user?.profileImage === '/images/anonymous.png' ? '/images/profile-img-bg.svg' : user!.profileImage!);

    const onChangeImage = (image: File) => {
        setImageUrl(URL.createObjectURL(image));
        return editUser({profileImage: image});
    }



    return (
        <div className="row editpf-con">
            <div className="col-xxl-12">
                <div className="card-header px-0">
                    <h4 className="card-title">{t(`profile_edit.title1`)} </h4>
                    <button className="btn btn-primary save-btn" onClick={() =>onClickSave()}>{t(`profile_edit.button`)}</button>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form className="row">
                            <div className="col-12">
                                <div className="user-img">
                                    <img src={imageUrl} alt="" className="pf-img"/>
                                        <div className="choose-file">
                                            <span className="label">{t(`profile_edit.file_button`)}</span>
                                            <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File"
                                                   onChange={e => onChangeImage(e.target.files![0])}/>
                                            <span className="recommend">* {t(`profile_edit.file_description`)}</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.id`)}</span>
                                    <h4>{user?.email}</h4>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.nickname`)}</span>
                                    <input type="text" className="user-input" placeholder={user?.nickname ?? ''}
                                           onChange={(e) => editUser({newName: e.target.value})}/>
                                    {!nicknameState ? <span className="error-msg">{t(`profile_edit.nickname_err`)}</span> : <></>}
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.join`)}</span>
                                    <h4>{getDateFormat(user?.createdAt)}</h4>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.country`)}</span>
                                    <h4>{getCounty(user!.countryCode!)}</h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-xxl-12">
                <div className="card-header px-0">
                    <h4 className="card-title">{t(`profile_edit.title2`)} </h4>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.current`)}</span>
                                    <input type="password" className="user-input" placeholder={t(`profile_edit.current_input`)}
                                           onChange={(e) => editUser({password: e.target.value})}/>
                                    {passwordState ? <></> : <span className="error-msg">{t(`profile_edit.pw_err`)}</span>}
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.new_pw`)}</span>
                                    <input type="password" className="user-input" placeholder={t(`profile_edit.new_input`)}
                                           onChange={(e) => editUser({newPassword: e.target.value})}/>
                                    {/*<span className="error-msg">비밀번호 필수입력조건 노출</span>*/}
                                    {regex ? <></> : <span className="error-msg">{t(`profile_edit.pw_multi`)}</span>}
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="user-info">
                                    <span>{t(`profile_edit.check_pw`)}</span>
                                    <input type="password" className="user-input" placeholder={t(`profile_edit.new_input`)}
                                    onChange={(e) => setNewPassword(e.target.value)}/>
                                    {checkPassword ? <span className="success-msg">{t(`profile_edit.pw_match`)}</span> : <span className="error-msg">{t(`profile_edit.pw_mismatch`)}</span>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEditComponent;