# Reference

## Nonprofits

<details><summary><code>client.nonprofits.<a href="/src/api/resources/nonprofits/client/Client.ts">getByEin</a>(ein) -> Chariot.Nonprofit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a nonprofit organization by EIN.
If the nonprofit does not exist, this returns 404 Not Found status.
If the nonprofit does not pass our compliance checks, a 422 Unprocessable Content is returned with a reason.
In the case that the nonprofit does not exist, you can create one by calling the POST /v1/nonprofits API endpoint.
The EIN should be exactly 9 digits and should not contain any special characters such as dashes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonprofits.getByEin("530196605");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**ein:** `string`

The unique federal employer identification number (EIN) of the nonprofit.
This value should be exactly 9 digits and should not contain any special characters such as dashes.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nonprofits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonprofits.<a href="/src/api/resources/nonprofits/client/Client.ts">create</a>({ ...params }) -> Chariot.Nonprofit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a nonprofit organization account.
This is useful for integration partners to use after a nonprofit consents to use the Chariot payment option on their donation forms.
If a nonprofit does not already exist for the EIN, this will return a 201 Created status.
If a nonprofit already exists for the given EIN on the system, this will return a 200 Created status.
If the nonprofit does not pass our compliance checks, a 422 Unprocessable Content is returned with a reason.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonprofits.create({
    user: {
        email: "ben.give@co.com",
    },
    ein: "043567500",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.NonprofitsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nonprofits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonprofits.<a href="/src/api/resources/nonprofits/client/Client.ts">getById</a>(id) -> Chariot.Nonprofit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a nonprofit organization by ID.
If the nonprofit does not exist, this returns 404 Not Found status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonprofits.getById("g33ee4ee-f881-42a0-85e3-1dde7118w9k2");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the nonprofit

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nonprofits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Connects

<details><summary><code>client.connects.<a href="/src/api/resources/connects/client/Client.ts">create</a>({ ...params }) -> Chariot.Connect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get or create a Connect object. Only one Connect object can be created per Nonprofit for a given Fundraising Application. If one already exists, this will return a 200 status with the existing object. The returned Connect can be used to integrate the client-side Chariot Connect component using the id property (CID) and also query for data generated from the Chariot Connect instance from the Chariot API using the apiKey property.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connects.create({
    nonprofit: "6af3f58e-7a80-4997-8259-770c033d7d3a",
    suborganization: "c00d1aa2-09ab-4e76-8461-7ac34578a70c",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.ConnectsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connects.<a href="/src/api/resources/connects/client/Client.ts">get</a>(id) -> Chariot.Connect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a Connect object with the unique identifier (CID)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connects.get("live_xJd0lUrvpDkzeGBWZbuI2wbvEdM");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — the unique id of the connect

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Grants

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.UnintegratedGrant></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all unintegrated grants for the provided API Key. This API allows for paginating over many results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.list({
    chariotApiKey: "live_xJd0lUrvpDkzeGBWZbuI2wbvEdM",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.GrantsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">create</a>({ ...params }) -> Chariot.Grant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a grant from a workflow session. This is useful to capture a grant intent from an authorized connect workflow session and submit the grant request.
The grant must be captured within 5 minutes of authorization otherwise the request will return status 410 Gone.
A grant can only be captured once from any given workflow session so any duplicate requests will return status 409 Conflict.
The grant amount must be in whole dollar increments (rounded to the nearest hundred) as currently DAFs only accept whole dollar grants.
The grant amount must be greater than or equal to the minimum grant amount for the DAF otherwise the request will return status 400 Bad Request.
The grant amount must be less than or equal to the user's DAF account balance otherwise the request will return status 400 Bad Request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.create({
    workflowSessionId: "workflowSessionId",
    amount: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.GrantsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">get</a>(id) -> Chariot.UnintegratedGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an unintegrated grant object generated by Chariot Connect.
If the grant does not exist, returns a 404 status.
If the provided ID is not a v4 UUID according to RFC 4122, returns a 400 status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.get("10229488-08d2-4629-b70c-a2f4f4d25344");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — the unique id of the unintegrated grant

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">update</a>(id, { ...params }) -> Chariot.UnintegratedGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an unintegrated grant object generated by Chariot Connect.
This is useful to update the status or acknowledgement of the unintegrated grant.
If the unintegrated grant does not exist, returns a 404 status.
If the provided ID is not a v4 UUID according to RFC 4122, returns a 400 status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.update("10229488-08d2-4629-b70c-a2f4f4d25344");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — the unique id of the unintegrated grant

</dd>
</dl>

<dl>
<dd>

**request:** `Chariot.GrantsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">listRecurringGrants</a>({ ...params }) -> Chariot.ListRecurringGrantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all recurring grants for the provided API Key. This API allows for paginating over many results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.listRecurringGrants({
    chariotApiKey: "live_xJd0lUrvpDkzeGBWZbuI2wbvEdM",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.ListRecurringGrantsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">createRecurringGrant</a>({ ...params }) -> Chariot.RecurringGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a recurring grant from a workflow session. This is useful to capture a recurring grant intent from an authorized connect workflow session and submit the recurring grant request.
The recurring grant must be captured within 5 minutes of authorization otherwise the request will return status 410 Gone.
A recurring grant can only be captured once from any given workflow session so any duplicate requests will return status 409 Conflict.
The amount must be in whole dollar increments (rounded to the nearest hundred) as currently DAFs only accept whole dollar grants.
The grant amount must be greater than or equal to the minimum grant amount for the DAF otherwise the request will return status 400 Bad Request.
The amount for the first grant must be less than or equal to the user's DAF account balance otherwise the request will return status 400 Bad Request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.createRecurringGrant({
    workflowSessionId: "workflowSessionId",
    amount: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.CreateRecurringGrantRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">getRecurringGrant</a>(id) -> Chariot.RecurringGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a recurring grant object generated by Chariot Connect.
If the grant does not exist, returns a 404 status.
If the provided ID is not a v4 UUID according to RFC 4122, returns a 400 status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.grants.getRecurringGrant("10229488-08d2-4629-b70c-a2f4f4d25344");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — the unique id of the recurring grant

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Grants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DAFs

<details><summary><code>client.dAFs.<a href="/src/api/resources/dAFs/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.Daf></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all DAF objects. This API allows for paginating over many results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dAFs.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.DaFsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DAFs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dAFs.<a href="/src/api/resources/dAFs/client/Client.ts">get</a>(id) -> Chariot.Daf</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a DAF object by id.
If the DAF does not exist, returns a 404 status.
If the provided ID is not a v4 UUID according to RFC 4122, returns a 400 status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dAFs.get("f9e28217-e0f7-4a54-9764-d664ffb10722");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — the unique id of the DAF

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DAFs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.Event></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all events corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.EventsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">get</a>(id) -> Chariot.Event</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an event corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the event

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EventSubscriptions

<details><summary><code>client.eventSubscriptions.<a href="/src/api/resources/eventSubscriptions/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.EventSubscription></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all event subscriptions corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSubscriptions.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.EventSubscriptionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSubscriptions.<a href="/src/api/resources/eventSubscriptions/client/Client.ts">create</a>({ ...params }) -> Chariot.EventSubscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an event subscription corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSubscriptions.create({
    url: "https://example.com/webhook",
    category: Chariot.EventCategory.GrantCreated,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.EventSubscriptionsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSubscriptions.<a href="/src/api/resources/eventSubscriptions/client/Client.ts">get</a>(id) -> Chariot.EventSubscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an event subscription corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSubscriptions.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the event subscription

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSubscriptions.<a href="/src/api/resources/eventSubscriptions/client/Client.ts">update</a>(id, { ...params }) -> Chariot.EventSubscription</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an event subscription corresponding to your Chariot account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSubscriptions.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the event subscription

</dd>
</dl>

<dl>
<dd>

**request:** `Chariot.EventSubscriptionsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSubscriptions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Auth

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getToken</a>({ ...params }) -> Chariot.GetTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain an access token using client credentials

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken({
    clientId: "client_id",
    clientSecret: "client_secret",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Chariot.AuthGetTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
