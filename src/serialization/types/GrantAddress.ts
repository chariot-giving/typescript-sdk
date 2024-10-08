/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Chariot from "../../api/index";
import * as core from "../../core";

export const GrantAddress: core.serialization.ObjectSchema<serializers.GrantAddress.Raw, Chariot.GrantAddress> =
    core.serialization.object({
        line1: core.serialization.string().optional(),
        line2: core.serialization.string().optional(),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        postalCode: core.serialization.string().optional(),
    });

export declare namespace GrantAddress {
    interface Raw {
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        state?: string | null;
        postalCode?: string | null;
    }
}
