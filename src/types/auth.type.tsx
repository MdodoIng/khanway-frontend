import { Maybe, User} from "@graphql/graphql.ts";
import * as actions from "@action/auth.action.tsx";
import {ActionType} from "typesafe-actions";

export type AuthState = {
    user?: Maybe<User>;
    isLoggedIn: boolean;
    currentPage?: string;
    rememberMe?: boolean;


    countryCode?: string;
    phoneNumber?: string;

    type?: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
}

export type SignUpFormType = {
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
    countryCode: string;
    term1Accept: boolean;
    term2Accept: boolean;
    allAccept: boolean;
}

export type AuthAction = ActionType<typeof actions>;
