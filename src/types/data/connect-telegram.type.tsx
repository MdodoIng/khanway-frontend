import {UserSns} from "@graphql/graphql.ts";
import {BaseOutput} from "@type/data/base.type.tsx";

export interface ConnectTelegramInputType {
    telegramUsername?: string;
    telegramFirstName: string;
    telegramLastName: string;
    telegramUserId: string;
}

export interface ConnectTelegramOutputType extends BaseOutput{
    userSNS?: UserSns;
}