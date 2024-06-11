import {BaseOutput} from "@type/data/base.type.tsx";

export interface VerifyReferralUserInputType {
    email: string;
}

export interface VerifyReferralUserOutputType extends BaseOutput {
    isVerified?: boolean;
}