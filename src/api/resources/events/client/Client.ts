/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Chariot from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Events {
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

export class Events {
    constructor(protected readonly _options: Events.Options = {}) {}

    /**
     * List all events corresponding to your Chariot account.
     *
     * @param {Chariot.EventsListRequest} request
     * @param {Events.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.UnauthorizedError}
     * @throws {@link Chariot.ForbiddenError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.events.list()
     */
    public async list(
        request: Chariot.EventsListRequest = {},
        requestOptions?: Events.RequestOptions
    ): Promise<core.Page<Chariot.Event>> {
        const list = async (request: Chariot.EventsListRequest): Promise<Chariot.EventsListResponse> => {
            const { limit, cursor, category } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            if (category != null) {
                _queryParams["category"] = category;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    ((await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production)
                        .production,
                    "v1/events"
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "chariot-typescript-sdk",
                    "X-Fern-SDK-Version": "0.0.1-alpha1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.EventsListResponse.parseOrThrow(_response.body, {
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
        };
        return new core.Pageable<Chariot.EventsListResponse, Chariot.Event>({
            response: await list(request),
            hasNextPage: (response) => response?.nextPageToken != null,
            getItems: (response) => response?.results ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.nextPageToken));
            },
        });
    }

    /**
     * Retrieve an event corresponding to your Chariot account.
     *
     * @param {string} id - The unique identifier for the event
     * @param {Events.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.UnauthorizedError}
     * @throws {@link Chariot.ForbiddenError}
     * @throws {@link Chariot.NotFoundError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.events.get("id")
     */
    public async get(id: string, requestOptions?: Events.RequestOptions): Promise<Chariot.Event> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production)
                    .production,
                `v1/events/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "chariot-typescript-sdk",
                "X-Fern-SDK-Version": "0.0.1-alpha1",
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
            return serializers.Event.parseOrThrow(_response.body, {
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
