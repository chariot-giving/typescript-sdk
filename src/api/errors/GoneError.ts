/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Chariot from "../index";

export class GoneError extends errors.ChariotError {
    constructor(body: Chariot.Error_) {
        super({
            message: "GoneError",
            statusCode: 410,
            body: body,
        });
        Object.setPrototypeOf(this, GoneError.prototype);
    }
}
