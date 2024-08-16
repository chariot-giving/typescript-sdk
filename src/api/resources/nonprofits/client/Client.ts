/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Chariot from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Nonprofits {
    interface Options {
        environment?: core.Supplier<environments.ChariotEnvironment | environments.ChariotEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Nonprofits {
    constructor(protected readonly _options: Nonprofits.Options = {}) {}

    /**
     * Retrieves a nonprofit organization by an [Employee Identification Number](https://www.irs.gov/charities-non-profits/employer-identification-number) (EIN).
     * The EIN is a unique number that identifies the organization to the Internal Revenue Service (IRS).
     *
     * In the case that the organization does not exist within Chariot's system, you can create one by calling the [Create Nonprofit](/api-reference/nonprofits/create) API endpoint.
     *
     * @param {string} ein - The unique federal employer identification number (EIN) of the nonprofit.
     *                       This value should be exactly 9 digits and should not contain any special characters such as dashes.
     * @param {Nonprofits.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.UnauthorizedError}
     * @throws {@link Chariot.ForbiddenError}
     * @throws {@link Chariot.NotFoundError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.nonprofits.getByEin("530196605")
     */
    public async getByEin(ein: string, requestOptions?: Nonprofits.RequestOptions): Promise<Chariot.Nonprofit> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production)
                    .api,
                `v1/nonprofit/${encodeURIComponent(ein)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@chariot-giving/typescript-sdk",
                "X-Fern-SDK-Version": "v0.0.1-alpha9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Nonprofit.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Chariot.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Chariot.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Chariot.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Chariot.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Chariot.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ChariotError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ChariotError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ChariotTimeoutError();
            case "unknown":
                throw new errors.ChariotError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a nonprofit organization.
     *
     * This is useful for integration partners to use after a nonprofit consents to use the Chariot payment option on their donation forms.
     *
     * <Tip>
     * If a nonprofit does not already exist for the EIN, this will return a `201 Created` status.
     * If a nonprofit already exists for the given EIN on the system, this will return a `200 OK` status.
     * </Tip>
     *
     * <Warning>
     * Handling errors:
     * - If the nonprofit does not exist within Chariot's database, a `404 Not Found` status is returned.
     * - If the nonprofit exists but does not pass Chariot's compliance checks, a `412 Precondition Failed` status is returned with a reason.
     * </Warning>
     *
     * @param {Chariot.NonprofitsCreateRequest} request
     * @param {Nonprofits.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.UnauthorizedError}
     * @throws {@link Chariot.ForbiddenError}
     * @throws {@link Chariot.NotFoundError}
     * @throws {@link Chariot.PreconditionFailedError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.nonprofits.create({
     *         user: {
     *             email: "ben.give@co.com"
     *         },
     *         ein: "043567500"
     *     })
     */
    public async create(
        request: Chariot.NonprofitsCreateRequest,
        requestOptions?: Nonprofits.RequestOptions
    ): Promise<Chariot.Nonprofit> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production)
                    .api,
                "v1/nonprofits"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@chariot-giving/typescript-sdk",
                "X-Fern-SDK-Version": "v0.0.1-alpha9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.NonprofitsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Nonprofit.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Chariot.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Chariot.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Chariot.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Chariot.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 412:
                    throw new Chariot.PreconditionFailedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Chariot.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ChariotError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ChariotError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ChariotTimeoutError();
            case "unknown":
                throw new errors.ChariotError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves the nonprofit organization with the given ID.
     *
     * @param {string} id - The unique identifier for the nonprofit
     * @param {Nonprofits.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.UnauthorizedError}
     * @throws {@link Chariot.ForbiddenError}
     * @throws {@link Chariot.NotFoundError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.nonprofits.getById("g33ee4ee-f881-42a0-85e3-1dde7118w9k2")
     */
    public async getById(id: string, requestOptions?: Nonprofits.RequestOptions): Promise<Chariot.Nonprofit> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production)
                    .api,
                `v1/nonprofits/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@chariot-giving/typescript-sdk",
                "X-Fern-SDK-Version": "v0.0.1-alpha9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Nonprofit.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Chariot.BadRequestError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Chariot.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Chariot.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Chariot.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Chariot.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ChariotError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ChariotError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ChariotTimeoutError();
            case "unknown":
                throw new errors.ChariotError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
