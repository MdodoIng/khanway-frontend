import {BaseOutput} from "@type/data/base.type.tsx";
import {UserSns} from "@graphql/graphql.ts";

export interface OnYoutubeSubscriptionOutputType extends BaseOutput {
    userSNS?: UserSns;
}