import { UserSns} from "@graphql/graphql.ts";
import {BaseOutput} from "@type/data/base.type.tsx";

export interface GetUserSNSOutput extends BaseOutput {
    userSNS?: UserSns;
}