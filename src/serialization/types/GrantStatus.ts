/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Chariot from "../../api/index";
import * as core from "../../core";
import { GrantStatusStatus } from "./GrantStatusStatus";

export const GrantStatus: core.serialization.ObjectSchema<serializers.GrantStatus.Raw, Chariot.GrantStatus> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.date(),
        status: GrantStatusStatus,
        comment: core.serialization.string().optional(),
    });

export declare namespace GrantStatus {
    interface Raw {
        id: string;
        createdAt: string;
        status: GrantStatusStatus.Raw;
        comment?: string | null;
    }
}
