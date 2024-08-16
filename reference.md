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

Retrieves a nonprofit organization by an [Employee Identification Number](https://www.irs.gov/charities-non-profits/employer-identification-number) (EIN).
The EIN is a unique number that identifies the organization to the Internal Revenue Service (IRS).

In the case that the organization does not exist within Chariot's system, you can create one by calling the [Create Nonprofit](/api-reference/nonprofits/create) API endpoint.

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

Create a nonprofit organization.

This is useful for integration partners to use after a nonprofit consents to use the Chariot payment option on their donation forms.

<Tip>
If a nonprofit does not already exist for the EIN, this will return a `201 Created` status.
If a nonprofit already exists for the given EIN on the system, this will return a `200 OK` status.
</Tip>

<Warning>
Handling errors:
- If the nonprofit does not exist within Chariot's database, a `404 Not Found` status is returned.
- If the nonprofit exists but does not pass Chariot's compliance checks, a `412 Precondition Failed` status is returned with a reason.
</Warning>
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

Retrieves the nonprofit organization with the given ID.

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

Get an existing connect or create a new connect for an existing nonprofit organization.

The returned Connect can be used to integrate the client-side Chariot Connect component using the `id` property (CID) and also query for data generated from the Chariot Connect instance from the Chariot API using the `x-chariot-api-key` header parameter.

<Note>
Only one Connect object can be created per Nonprofit.
If one already exists, this will return a `200 OK` status with the existing object.
</Note>
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

Retrieve a connect with the given ID.

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

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.Grant></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all grants for a given Connect. This API allows for paginating over many results.

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

Create and submit a new grant. This should be used to capture a grant intent from an authorized DAFpay workflow session and submit the grant request to the DAF sponsor.

<Warning>
Error handling:
- The grant must be captured within 15 minutes of authorization otherwise the request will return status `410 Gone`.
- A grant can only be captured once from any given workflow session so any duplicate requests will return status `409 Conflict`.
- The amount must be in whole dollar increments (rounded to the nearest hundred) as currently DAFs only accept whole dollar grants otherwise the request will return status `400 Bad Request`.
- The amount must be greater than or equal to the minimum grant amount for the DAF otherwise the request will return status `400 Bad Request`.
- The amount must be less than or equal to the user's DAF account balance otherwise the request will return status `400 Bad Request`.
</Warning>
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

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">get</a>(id) -> Chariot.Grant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a grant with the given ID.

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

**id:** `string`

The unique id of the grant.
The format should be a v4 UUID according to RFC 4122.

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

<details><summary><code>client.grants.<a href="/src/api/resources/grants/client/Client.ts">update</a>(id, { ...params }) -> Chariot.Grant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a grant object with the given ID.
This can be used to update the status or acknowledgement of the grant.

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

**id:** `string`

The unique id of the grant.
The format should be a v4 UUID according to RFC 4122.

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

## RecurringGrants

<details><summary><code>client.recurringGrants.<a href="/src/api/resources/recurringGrants/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.RecurringGrant></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all recurring grants for a given Connect. This API allows for paginating over many results.

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
await client.recurringGrants.list({
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

**request:** `Chariot.RecurringGrantsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurringGrants.<a href="/src/api/resources/recurringGrants/client/Client.ts">create</a>({ ...params }) -> Chariot.RecurringGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create and submit a new recurring grant. This should be used to capture a recurring grant intent from an authorized DAFpay workflow session and submit the recurring grant request to the DAF sponsor.

<Warning>
Error handling:
- The recurring grant must be captured within 15 minutes of authorization otherwise the request will return status `410 Gone`.
- A recurring grant can only be captured once from any given workflow session so any duplicate requests will return status `409 Conflict`.
- The amount must be in whole dollar increments (rounded to the nearest hundred) as currently DAFs only accept whole dollar grants otherwise the request will return status `400 Bad Request`.
- The amount must be greater than or equal to the minimum grant amount for the DAF otherwise the request will return status `400 Bad Request`.
- The amount must be less than or equal to the user's DAF account balance otherwise the request will return status `400 Bad Request`.
</Warning>
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
await client.recurringGrants.create({
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

**request:** `Chariot.RecurringGrantsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.recurringGrants.<a href="/src/api/resources/recurringGrants/client/Client.ts">get</a>(id) -> Chariot.RecurringGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a recurring grant with a given ID.

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
await client.recurringGrants.get("10229488-08d2-4629-b70c-a2f4f4d25344");
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

**id:** `string`

The unique id of the recurring grant.
The format should be a v4 UUID according to RFC 4122.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecurringGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UnintegratedGrants

<details><summary><code>client.unintegratedGrants.<a href="/src/api/resources/unintegratedGrants/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.UnintegratedGrant></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all unintegrated grants for a given Connect. This API allows for paginating over many results.

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
await client.unintegratedGrants.list({
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

**request:** `Chariot.UnintegratedGrantsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UnintegratedGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.unintegratedGrants.<a href="/src/api/resources/unintegratedGrants/client/Client.ts">get</a>(id) -> Chariot.UnintegratedGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an unintegrated grant with a given ID.

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
await client.unintegratedGrants.get("10229488-08d2-4629-b70c-a2f4f4d25344");
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

**id:** `string`

The unique id of the unintegrated grant.
The format should be a v4 UUID according to RFC 4122.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UnintegratedGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.unintegratedGrants.<a href="/src/api/resources/unintegratedGrants/client/Client.ts">update</a>(id, { ...params }) -> Chariot.UnintegratedGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an unintegrated grant object with the given ID.
This can be used to update the status or acknowledgement of the unintegrated grant.

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
await client.unintegratedGrants.update("10229488-08d2-4629-b70c-a2f4f4d25344");
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

**id:** `string`

The unique id of the unintegrated grant.
The format should be a v4 UUID according to RFC 4122.

</dd>
</dl>

<dl>
<dd>

**request:** `Chariot.UnintegratedGrantsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UnintegratedGrants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DaFs

<details><summary><code>client.daFs.<a href="/src/api/resources/daFs/client/Client.ts">list</a>({ ...params }) -> core.Page<Chariot.Daf></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all Donor Advised Funds within Chariot's system. This API allows for paginating over many results.

<Note>
If there are DAFs missing from the list, please contact support at support@givechariot.com.
</Note>
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
await client.daFs.list();
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

**requestOptions:** `DaFs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.daFs.<a href="/src/api/resources/daFs/client/Client.ts">get</a>(id) -> Chariot.Daf</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a DAF with a given ID.

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
await client.daFs.get("f9e28217-e0f7-4a54-9764-d664ffb10722");
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

**id:** `string`

The unique id of the DAF.
The format should be a v4 UUID according to RFC 4122.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DaFs.RequestOptions`

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

Retrieve an event with the given ID.

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

**id:** `string` — The unique id for the event

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

Retrieve an event subscription with the given ID.

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

Update an event subscription with the given ID.

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

Obtain an OAuth2 access token using client credentials

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
