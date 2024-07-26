/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Chariot from "../index";

export class ConflictError extends errors.ChariotError {
    constructor(body: Chariot.Error_) {
        super({
            message: "ConflictError",
            statusCode: 409,
            body: body,
        });
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
