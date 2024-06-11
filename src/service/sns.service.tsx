import { get, post } from "@helper/axios.handler"
import {ConnectTelegramInputType, ConnectTelegramOutputType} from "@type/data/connect-telegram.type.tsx";
import {GetUserSNSOutput} from "@type/data/get-user-sns.type.tsx";
import {GetTelegramVerifyInputType} from "@type/data/get-telegram-verify.type.tsx";
import {GetTelegramLinkInputType, GetTelegramLinkOutputType} from "@type/data/get-telegram-link.type.tsx";
import {GetTwitterAuthUrlOutputType} from "@type/data/get-twitter-auth-url.type.tsx";
import {GetTwitterVerifyOutputType} from "@type/data/get-twitter-verify.type.tsx";
import {FollowKhanwayOutputType} from "@type/data/follow-khanway.type.tsx";
import {VerifyReferralUserInputType, VerifyReferralUserOutputType} from "@type/data/verify-referral-user.type.tsx";
import {OnSetReferralUserInputType, OnSetReferralUserOutputType} from "@type/data/on-set-referral-user.type.tsx";
import {OnYoutubeSubscriptionOutputType} from "@type/data/on-youtube-subscription.type.tsx";

export const getUserSNS = (): Promise<GetUserSNSOutput> => get('/sns/getUserSNS');

export const connectTelegram = (data: ConnectTelegramInputType): Promise<ConnectTelegramOutputType> => post('/sns/connectTelegram', data);

export const getTelegramVerify = (data: GetTelegramVerifyInputType): Promise<ConnectTelegramOutputType> => post('/sns/getTelegramVerify', data);

export const getTelegramLink = (data: GetTelegramLinkInputType): Promise<GetTelegramLinkOutputType> => post('/sns/getTelegramLink', data);

export const getTwitterAuthURL = (): Promise<GetTwitterAuthUrlOutputType> => get('/sns/getTwitterAuthURL');

export const getTwitterVerify = (): Promise<GetTwitterVerifyOutputType> => get('/sns/getTwitterVerify');

export const followKhanway = (): Promise<FollowKhanwayOutputType> => post('/sns/followKhanway');

export const verifyReferralUser = (data: VerifyReferralUserInputType): Promise<VerifyReferralUserOutputType> => post('/sns/verifyReferralUser', data);

export const onSetReferralUser = (data: OnSetReferralUserInputType): Promise<OnSetReferralUserOutputType> => post('/sns/onSetReferralUser', data);

export const onYoutubeSubscribe = (): Promise<OnYoutubeSubscriptionOutputType> => post('/sns/onYoutubeSubscription');