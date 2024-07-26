/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Chariot from "../index";

/**
 * A Nonprofit represents a registered 501(c)(3) charitable organization in good standing with the IRS.
 */
export interface Nonprofit {
    /** The unique identifier for the object. */
    id: string;
    /** The IRS registered name of the nonprofit organization */
    name: string;
    /** The preferred name of the nonprofit organization. This is the name that shows up on the nonprofit's dashboard and Connect modal. This is useful for nonprofits that are known by a different name to donors and don't use their IRS registered name publicly. */
    preferredName?: string;
    /** The US federal employer identification number (Tax ID); unique on the system. This value should be exactly 9 digits and should not contain any special characters such as dashes. */
    ein: string;
    /**
     * The list of suborganizations associated with this nonprofit.
     * Suborganizations are useful for nonprofits that have multiple chapters or locations.
     */
    suborganizations?: Chariot.Suborganization[];
    address?: Chariot.Address;
    /** The URI of the nonprofit's logo */
    picture?: string;
    /** The URL of the nonprofit's website */
    website?: string;
    /** Time when this object was created. Expressed in ISO 8601 format. */
    createdAt?: Date;
    /** Time when this object was last updated. Expressed in ISO 8601 format. */
    updatedAt?: Date;
    /**
     * A flag to indicate if the nonprofit will receive grants through the DAFPay Network.
     * Grants processing through the DAFPay Network will be sent to the DAFPay Network 501(c)(3) non-profit organization (EIN: 93-1372175).
     * The DAFPay Network will then review and process the grant and send the funds to the nonprofit.
     * Grants processed outside the DAFPay Network will be sent directly to the nonprofit.
     */
    isDafPayNetwork?: boolean;
    /**
     * A flag to indicate if the nonprofit is in good standing with the IRS.
     * If the nonprofit is a tax-exempt 501(c)(3) Public Charity in good standing with the IRS, this field should be true.
     * This status can change over time and is kept up-to-date by Chariot.
     * Regardless of the value of this field, Connects can still be created for the nonprofit,
     * however the nonprofit will not be able to receive grants through Chariot if this field is false.
     * If you believe the value of this field is incorrect for a Nonprofit, please contact the Chariot team.
     */
    inGoodStanding?: boolean;
    /**
     * A flag to indicate if the nonprofit has been claimed by a user.
     * A nonprofit is claimed if a user signs up for a Chariot account with
     * this nonprofit and is verified by the Chariot team.
     */
    claimed?: boolean;
}
