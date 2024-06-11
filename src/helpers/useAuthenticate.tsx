import {useAuthVerifyQuery} from "@graphql/graphql.ts";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserAction} from "@action/auth.action.tsx";

export default function useAuthenticate(){
    const dispatch = useDispatch();
    const path = useLocation();
    const {data, loading, refetch} = useAuthVerifyQuery();

    useEffect(() => {
        refetch().then((response) => {
            dispatch(setUserAction(response.data?.authVerify?.user || null));
            return response;
        });
    }, [path.pathname]);

    return {isVerified: data?.authVerify.isVerified, loading};
}