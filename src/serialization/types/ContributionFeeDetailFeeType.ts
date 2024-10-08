/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Chariot from "../../api/index";
import * as core from "../../core";

export const ContributionFeeDetailFeeType: core.serialization.Schema<
    serializers.ContributionFeeDetailFeeType.Raw,
    Chariot.ContributionFeeDetailFeeType
> = core.serialization.enum_(["chariot", "daf", "fundraising_application"]);

export declare namespace ContributionFeeDetailFeeType {
    type Raw = "chariot" | "daf" | "fundraising_application";
}
