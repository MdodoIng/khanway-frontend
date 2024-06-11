import {UserSns} from "@graphql/graphql.ts";
import {BaseOutput} from "@type/data/base.type.tsx";

export interface GetTwitterVerifyOutputType extends BaseOutput {
    userSNS?: UserSns;
}