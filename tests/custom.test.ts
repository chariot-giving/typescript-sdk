import { ChariotClient, ChariotEnvironment } from "../src"

describe("test", () => {
    it.skip("default", async () => {
        const client = new ChariotClient({ 
            clientId: "YOUR_CLIENT_ID",
            clientSecret: "YOUR_CLIENT_SECRET",
            environment: ChariotEnvironment.Sandbox
        });
        
        const response = await client.nonprofits.create({
            user: {
                email: "ben.give@co.com",
            },
            ein: "043567500",
        });

        console.log(response);
    });
});