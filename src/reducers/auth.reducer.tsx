import {AuthState, AuthAction} from "@type/auth.type.tsx";
import {createReducer} from "typesafe-actions";
import {
    ON_CHANGE_COUNTRY,
    ON_CHANGE_PHONE, SET_CURRENT_PAGE, SET_EMAIL,
    SET_EMAIL_VERIFIED, SET_INITIAL_STATE, SET_PHONE,
    SET_PHONE_VERIFIED, SET_REMEMBER_ME,
    SET_USER
} from "@action/auth.action.tsx";

const initialState: AuthState = {
    user: undefined,
    isLoggedIn: false,
    currentPage: undefined,
    rememberMe: false,

    countryCode: undefined,
    phoneNumber: undefined,

    type: undefined,
    email: "",
    phone: "",
    emailVerified: false,
    phoneVerified: false
}
// const language = true;
//
// const languageReducer = createReducer(language, {
//     [SET_LANGUAGE]: (language) => !language
// })

const AuthReducer = createReducer<AuthState, AuthAction>(initialState, {
    [SET_USER]: (state, action) => ({
        ...state,
        user: action.payload
    }),
    [SET_CURRENT_PAGE]: (state, action) => ({
        ...state,
        currentPage: action.payload
    }),
    [ON_CHANGE_COUNTRY]: (state, action) => ({
        ...state,
        countryCode: action.payload
    }),
    [ON_CHANGE_PHONE]: (state, action) => ({
        ...state,
        phoneNumber: action.payload
    }),
    [SET_EMAIL]: (state, action) => ({
        ...state,
        email: action.payload
    }),
    [SET_PHONE]: (state, action) => ({
        ...state,
        phone: action.payload
    }),
    [SET_EMAIL_VERIFIED]: (state, action) => ({
        ...state,
        emailVerified: action.payload
    }),
    [SET_PHONE_VERIFIED]: (state, action) => ({
        ...state,
        phoneVerified: action.payload
    }),
    [SET_INITIAL_STATE]: (state) => ({
        ...initialState,
        user: state.user,
    }),
    [SET_REMEMBER_ME]: (state, action) => ({
        ...state,
        rememberMe: action.payload
    }),
})

export default AuthReducer;