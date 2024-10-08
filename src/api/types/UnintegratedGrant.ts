/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Chariot from "../index";

/**
 * An Unintegrated Grant represents a grant requested through a provider that Chariot does not support.
 * Unintegrated grants should be treated as donation intents as Chariot can not guarantee that the grant was submitted or will be fulfilled.
 * Nonprofits should use the information provided in the unintegrated grant to follow up with the donor and/or the provider to check the status of the grant.
 * These are sometimes refered to as "Manual Grants".
 */
export interface UnintegratedGrant {
    /** The unique identifier for the object */
    id: string;
    /** Often refered to as the "Chariot ID", this is the ID that will be included in the payment from the DAF provider. */
    userFriendlyId?: string;
    /** ID of the Connect Workflow Session associated with this grant */
    workflowSessionId: string;
    /** ID of the donor advised fund */
    fundId: string;
    /** Time when this object was created; expressed in ISO 8601 format */
    createdAt?: Date;
    /** Time when this object was last updated; expressed in ISO 8601 format */
    updatedAt?: Date;
    /** The grant amount expressed in units of whole cents */
    amount: number;
    /**
     * The status of the unintegrated grant.
     * To see a description of each status, see the "Unintegrated Grant Statuses" section of the Chariot documentation.
     */
    status?: Chariot.UnintegratedGrantStatus;
    /** A map of arbitrary string keys and values to store information about the object */
    metadata?: Record<string, string>;
    /** The donor's first name */
    firstName?: string;
    /** The donor's last name */
    lastName?: string;
    /** The donor's phone number */
    phone?: string;
    /** The donor's email */
    email?: string;
    address?: Chariot.GrantAddress;
    /** An note inputted by the user at submisson */
    note?: string;
    /**
     * The payment channel for the unintegrated grant. This is useful to know how the grant will be sent.
     * The payment channel for unintegrated grants will always be:
     *
     * - offline: Grant was initiated outside of Chariot so we're unable to confirm how the grant will be sent.
     */
    paymentChannel?: "offline";
}
