/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Chariot from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace DaFs {
    interface Options {
        environment?: core.Supplier<environments.ChariotEnvironment | string>;
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

export class DaFs {
    constructor(protected readonly _options: DaFs.Options = {}) {}

    /**
     * List all DAF objects. This API allows for paginating over many results.
     *
     * @param {Chariot.DaFsListRequest} request
     * @param {DaFs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.daFs.list()
     */
    public async list(
        request: Chariot.DaFsListRequest = {},
        requestOptions?: DaFs.RequestOptions
    ): Promise<core.Page<Chariot.Daf>> {
        const list = async (request: Chariot.DaFsListRequest): Promise<Chariot.DaFsListResponse> => {
            const { pageLimit, pageToken } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageLimit != null) {
                _queryParams["pageLimit"] = pageLimit.toString();
            }
            if (pageToken != null) {
                _queryParams["pageToken"] = pageToken;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production,
                    "v1/dafs"
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "chariot",
                    "X-Fern-SDK-Version": "0.0.1-alpha0",
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
                return serializers.DaFsListResponse.parseOrThrow(_response.body, {
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
        return new core.Pageable<Chariot.DaFsListResponse, Chariot.Daf>({
            response: await list(request),
            hasNextPage: (response) => response?.nextPageToken != null,
            getItems: (response) => response?.results ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "pageToken", response?.nextPageToken));
            },
        });
    }

    /**
     * Get a DAF object by id.
     * If the DAF does not exist, returns a 404 status.
     * If the provided ID is not a v4 UUID according to RFC 4122, returns a 400 status.
     *
     * @param {string} id - the unique id of the DAF
     * @param {DaFs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Chariot.BadRequestError}
     * @throws {@link Chariot.NotFoundError}
     * @throws {@link Chariot.InternalServerError}
     *
     * @example
     *     await client.daFs.get("f9e28217-e0f7-4a54-9764-d664ffb10722")
     */
    public async get(id: string, requestOptions?: DaFs.RequestOptions): Promise<Chariot.Daf> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ChariotEnvironment.Production,
                `v1/dafs/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "chariot",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
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
            return serializers.Daf.parseOrThrow(_response.body, {
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
