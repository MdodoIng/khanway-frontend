import {TelegramVerifyType} from "@graphql/graphql.ts";
import {BaseOutput} from "@type/data/base.type.tsx";

export interface GetTelegramLinkInputType {
    type: TelegramVerifyType;
}

export interface GetTelegramLinkOutputType extends BaseOutput {
    link?: string;
}