/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Chariot from "../../../../api/index";
import * as core from "../../../../core";

export const NonprofitsCreateRequestUser: core.serialization.ObjectSchema<
    serializers.NonprofitsCreateRequestUser.Raw,
    Chariot.NonprofitsCreateRequestUser
> = core.serialization.object({
    email: core.serialization.string(),
    phone: core.serialization.string().optional(),
    firstName: core.serialization.string().optional(),
    lastName: core.serialization.string().optional(),
});

export declare namespace NonprofitsCreateRequestUser {
    interface Raw {
        email: string;
        phone?: string | null;
        firstName?: string | null;
        lastName?: string | null;
    }
}
