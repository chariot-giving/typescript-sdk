/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Chariot from "../index";

export class InternalServerError extends errors.ChariotError {
    constructor(body: Chariot.Error_) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
