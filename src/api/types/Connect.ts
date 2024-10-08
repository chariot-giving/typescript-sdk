/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A Connect represents an instance of Chariot Connect for a particular Nonprofit. A nonprofit organization will create Connect objects in order to integrate Chariot Connect into their websites or fundraising platforms to start accepting donations directly from Donor Advised Funds. Each Nonprofit can have multiple Connect objects where each one represents a logical separation for how the organization wants to organize their sources of donations. For example, they might have 2 Connect instances, one that they use to integrate Chariot Connect directly on their website and the other that they provide to a 3rd party fundraising platform. On the client side, Chariot Connect is instantiated with the `id` of the Connect object, also called the `cid`. A connect object also contains an `apiKey`. This is useful for nonprofits to provide to fundraising platforms on their behalf to programatically integrate Chariot Connect and access resources and information created from the Connect instance through various Chariot API endpoints. More information on integrating Chariot Connect into a client-side application can be found here: https://givechariot.readme.io
 */
export interface Connect {
    /** The unique identifier for this object. This is also the 'publishable' cid to use for initializing Connect for client-side integration. */
    id: string;
    /** A human readable name for the connect, optional. */
    name?: string;
    /** A secure token that can be used to make M2M API calls to read data generated by this object. */
    apiKey: string;
    /** A flag to indicate if this connect is active. If true, then this Connect can process donations and grants, otherwise this Connect cannot process grants. */
    active?: boolean;
    /** Time when this object was created. Expressed in ISO 8601 format. */
    createdAt?: Date;
    /** Time when this object was last updated. Expressed in ISO 8601 format. */
    updatedAt?: Date;
    /** ID of the user who created this object. */
    createdBy?: string;
    /** A flag to indicate if this object is marked for deletion. */
    archived?: boolean;
    /** A map of arbitrary string keys and values to store information about the object. */
    metadata?: Record<string, string>;
}
