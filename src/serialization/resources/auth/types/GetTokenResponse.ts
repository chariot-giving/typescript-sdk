/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Chariot from "../../../../api/index";
import * as core from "../../../../core";

export const GetTokenResponse: core.serialization.ObjectSchema<
    serializers.GetTokenResponse.Raw,
    Chariot.GetTokenResponse
> = core.serialization.object({
    accessToken: core.serialization.property("access_token", core.serialization.string()),
    tokenType: core.serialization.property("token_type", core.serialization.string()),
    expiresIn: core.serialization.property("expires_in", core.serialization.number()),
});

export declare namespace GetTokenResponse {
    interface Raw {
        access_token: string;
        token_type: string;
        expires_in: number;
    }
}
