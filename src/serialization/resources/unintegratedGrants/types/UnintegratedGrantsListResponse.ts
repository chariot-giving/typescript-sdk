/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Chariot from "../../../../api/index";
import * as core from "../../../../core";
import { UnintegratedGrant } from "../../../types/UnintegratedGrant";

export const UnintegratedGrantsListResponse: core.serialization.ObjectSchema<
    serializers.UnintegratedGrantsListResponse.Raw,
    Chariot.UnintegratedGrantsListResponse
> = core.serialization.object({
    results: core.serialization.list(UnintegratedGrant).optional(),
    nextPageToken: core.serialization.string().optional(),
});

export declare namespace UnintegratedGrantsListResponse {
    interface Raw {
        results?: UnintegratedGrant.Raw[] | null;
        nextPageToken?: string | null;
    }
}
