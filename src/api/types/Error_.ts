/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Error_ {
    /** time when the error was reported. Expressed in ISO 8601 format. */
    timestamp: string;
    /** HTTP status code of the error */
    code: number;
    /** A short name of the error; usually the HTTP status. */
    error: string;
    /** The description of the error */
    message: string;
}
