import { Auth } from "api/resources/auth/client/Client";
import { ChariotClient as FernClient } from "../Client";
import * as core from "../core";
import * as environments from "../environments";
import { OAuthTokenProvider } from "core/auth/OAuthTokenProvider";

export declare namespace ChariotClient {
    
    interface Options {
        environment?: core.Supplier<environments.ChariotEnvironment | string>;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
    }
}

export class ChariotClient extends FernClient {
    constructor(protected readonly _options: ChariotClient.Options) {
        const _oauthTokenProvider = new OAuthTokenProvider({
            clientId: _options.clientId,
            clientSecret: _options.clientSecret,
            authClient: new Auth({
                environment: _options.environment,
            }),
        });
        super({
            ..._options,
            token: async () => await _oauthTokenProvider.getToken(),
        })
    }
}