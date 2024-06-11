import {TelegramVerifyType, UserSns} from "@graphql/graphql.ts";
import {BaseOutput} from "@type/data/base.type.tsx";

export interface GetTelegramVerifyInputType {
    type: TelegramVerifyType;
}

export interface GetTelegramVerifyOutputType extends BaseOutput {
    userSNS?: UserSns;
}