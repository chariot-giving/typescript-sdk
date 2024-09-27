import * as crypto from "crypto";

interface SignatureComponents {
    timestamp: string;
    signature: string;
}

interface VerifyWebhookSignatureOptions {
    // Validates event timestamps using a custom Tolerance window. If this is
    // not set and `IgnoreTolerance` is false, will default to
    // `DefaultTolerance`.
    toleranceInSeconds?: number;
    // If set to true, will ignore the `tolerance` option entirely and will not
    // check the event signature's timestamp. Defaults to false. When false,
    // constructing an event will fail with an error if the timestamp is not
    // within the `Tolerance` window.
    ignoreTolerance?: boolean;
}

// defaultTolerance indicates that signatures older than this will be rejected by ConstructEvent.
export const defaultTolerance = 300;

// signingVersion represents the version of the signature we currently use.
const signingVersion = "v1";

/**
 * Verifies the webhook signature using the provided signing secret.
 * @param payload The payload from the webhook request.
 * @param signatureHeader The signature header from the webhook request.
 * @param signingSecret The signing secret used to verify the signature. This should be the same secret used to create the event subscription.
 * @param options The options for verifying the webhook signature.
 * @returns True if the signature is valid, false otherwise.
 */
export function verifyWebhookSignature(
    payload: string,
    signatureHeader: string,
    signingSecret: string,
    options: VerifyWebhookSignatureOptions = {}
): boolean {
    const { timestamp, signature } = parseSignatureHeader(signatureHeader);
    const signedPayload = createSignedPayload(timestamp, payload);
    const expectedSignature = computeExpectedSignature(signingSecret, signedPayload);

    if (!options.ignoreTolerance) {
        const timestampDate = new Date(timestamp);
        const currentDate = new Date();
        const timeDifference = Math.abs(currentDate.getTime() - timestampDate.getTime()) / 1000;
        const tolerance = options.toleranceInSeconds ?? defaultTolerance;
        if (timeDifference > tolerance) {
            return false;
        }
    }

    return constantTimeStringCompare(signature, expectedSignature);
}

/**
 * Parses the signature header into its components.
 * @param header The signature header from the webhook request.
 * @returns The parsed signature components.
 */
function parseSignatureHeader(header: string): SignatureComponents {
    const parts = header.split(",");
    const components: Partial<SignatureComponents> = {};

    for (const part of parts) {
        const [prefix, value] = part.split("=");
        if (prefix === "t") {
            components.timestamp = value;
        } else if (prefix === signingVersion) {
            components.signature = value;
        }
    }

    if (!components.timestamp || !components.signature) {
        throw new Error("Invalid signature header");
    }

    return components as SignatureComponents;
}

function createSignedPayload(timestamp: string, payload: string): string {
    return `${timestamp}.${payload}`;
}

/**
 * Computes the expected signature for the given signed payload.
 * @param signingSecret The signing secret used to compute the signature.
 * @param signedPayload The signed payload to compute the signature for.
 * @returns The expected signature.
 */
function computeExpectedSignature(signingSecret: string, signedPayload: string): string {
    return crypto.createHmac("sha256", signingSecret).update(signedPayload).digest("hex");
}

/**
 * Compares two strings in constant time to prevent timing attacks.
 * @param a The first string to compare.
 * @param b The second string to compare.
 * @returns True if the strings are equal, false otherwise.
 */
function constantTimeStringCompare(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}
