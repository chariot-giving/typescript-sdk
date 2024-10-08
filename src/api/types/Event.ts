/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Chariot from "../index";

/**
 * Events are records of things that happened to objects at Chariot.
 */
export interface Event {
    /** The unique identifier for the event */
    id?: string;
    category?: Chariot.EventCategory;
    /** The date and time the event was created */
    createdAt?: Date;
    /** The unique identifier for the associated object */
    associatedObjectId?: string;
    /** The type of the associated object */
    associatedObjectType?: string;
}
