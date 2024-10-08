/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Chariot from "../../api/index";
import * as core from "../../core";

export const Connect: core.serialization.ObjectSchema<serializers.Connect.Raw, Chariot.Connect> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string().optional(),
        apiKey: core.serialization.string(),
        active: core.serialization.boolean().optional(),
        createdAt: core.serialization.date().optional(),
        updatedAt: core.serialization.date().optional(),
        createdBy: core.serialization.string().optional(),
        archived: core.serialization.boolean().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    });

export declare namespace Connect {
    interface Raw {
        id: string;
        name?: string | null;
        apiKey: string;
        active?: boolean | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        createdBy?: string | null;
        archived?: boolean | null;
        metadata?: Record<string, string> | null;
    }
}
