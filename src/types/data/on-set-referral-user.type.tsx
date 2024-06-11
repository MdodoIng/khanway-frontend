import {BaseOutput} from "@type/data/base.type.tsx";
import {UserSns} from "@graphql/graphql.ts";

export interface OnSetReferralUserInputType {
    emailList: string[];
}

export interface OnSetReferralUserOutputType extends BaseOutput {
    success: boolean;

    userSNS?: UserSns;
}