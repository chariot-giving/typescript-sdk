/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { Nonprofits } from "./api/resources/nonprofits/client/Client";
import { Connects } from "./api/resources/connects/client/Client";
import { Grants } from "./api/resources/grants/client/Client";
import { RecurringGrants } from "./api/resources/recurringGrants/client/Client";
import { UnintegratedGrants } from "./api/resources/unintegratedGrants/client/Client";
import { DaFs } from "./api/resources/daFs/client/Client";
import { Events } from "./api/resources/events/client/Client";
import { EventSubscriptions } from "./api/resources/eventSubscriptions/client/Client";

export declare namespace ChariotClient {
    interface Options {
        environment?: core.Supplier<environments.ChariotEnvironment | environments.ChariotEnvironmentUrls>;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
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

export class ChariotClient {
    private readonly _oauthTokenProvider: core.OAuthTokenProvider;

    constructor(protected readonly _options: ChariotClient.Options) {
        this._oauthTokenProvider = new core.OAuthTokenProvider({
            clientId: this._options.clientId,
            clientSecret: this._options.clientSecret,
            authClient: new Auth({
                environment: this._options.environment,
            }),
        });
    }

    protected _nonprofits: Nonprofits | undefined;

    public get nonprofits(): Nonprofits {
        return (this._nonprofits ??= new Nonprofits({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _connects: Connects | undefined;

    public get connects(): Connects {
        return (this._connects ??= new Connects({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _grants: Grants | undefined;

    public get grants(): Grants {
        return (this._grants ??= new Grants({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _recurringGrants: RecurringGrants | undefined;

    public get recurringGrants(): RecurringGrants {
        return (this._recurringGrants ??= new RecurringGrants({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _unintegratedGrants: UnintegratedGrants | undefined;

    public get unintegratedGrants(): UnintegratedGrants {
        return (this._unintegratedGrants ??= new UnintegratedGrants({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _daFs: DaFs | undefined;

    public get daFs(): DaFs {
        return (this._daFs ??= new DaFs({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _events: Events | undefined;

    public get events(): Events {
        return (this._events ??= new Events({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _eventSubscriptions: EventSubscriptions | undefined;

    public get eventSubscriptions(): EventSubscriptions {
        return (this._eventSubscriptions ??= new EventSubscriptions({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }
}
