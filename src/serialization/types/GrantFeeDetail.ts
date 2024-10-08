/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Chariot from "../../api/index";
import * as core from "../../core";
import { ContributionFeeDetail } from "./ContributionFeeDetail";

export const GrantFeeDetail: core.serialization.ObjectSchema<serializers.GrantFeeDetail.Raw, Chariot.GrantFeeDetail> =
    core.serialization.object({
        total: core.serialization.number().optional(),
        contributions: core.serialization.list(ContributionFeeDetail).optional(),
    });

export declare namespace GrantFeeDetail {
    interface Raw {
        total?: number | null;
        contributions?: ContributionFeeDetail.Raw[] | null;
    }
}
