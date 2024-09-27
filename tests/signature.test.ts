import { verifyWebhookSignature, defaultTolerance } from '../src/signature';
import * as crypto from 'crypto';

describe('verifyWebhookSignature', () => {
    const signingSecret = 'test_secret';
    const payload = '{"test": "data"}';
    const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

    function generateValidSignature(timestamp: string, payload: string): string {
        const signedPayload = `${timestamp}.${payload}`;
        const signature = crypto.createHmac('sha256', signingSecret).update(signedPayload).digest('hex');
        return `t=${timestamp},v1=${signature}`;
    }

    it('should return true for a valid signature', () => {
        const signatureHeader = generateValidSignature(timestamp, payload);
        expect(verifyWebhookSignature(payload, signatureHeader, signingSecret)).toBe(true);
    });

    it('should return false for an invalid signature', () => {
        const invalidSignature = 't=2024-01-19T18:48:56Z,v1=invalid_signature';
        expect(verifyWebhookSignature(payload, invalidSignature, signingSecret)).toBe(false);
    });

    it('should return false for an expired timestamp', () => {
        const oldDate = new Date(Date.now() - (defaultTolerance + 10) * 1000);
        const oldTimestamp = oldDate.toISOString().replace(/\.\d{3}Z$/, 'Z');
        const signatureHeader = generateValidSignature(oldTimestamp, payload);
        expect(verifyWebhookSignature(payload, signatureHeader, signingSecret)).toBe(false);
    });

    it('should return true for an expired timestamp when ignoreTolerance is true', () => {
        const oldDate = new Date(Date.now() - (defaultTolerance + 10) * 1000);
        const oldTimestamp = oldDate.toISOString().replace(/\.\d{3}Z$/, 'Z');
        const signatureHeader = generateValidSignature(oldTimestamp, payload);
        expect(verifyWebhookSignature(payload, signatureHeader, signingSecret, { ignoreTolerance: true })).toBe(true);
    });

    it('should use custom tolerance when provided', () => {
        const customTolerance = 60;
        const slightlyOldDate = new Date(Date.now() - (customTolerance - 5) * 1000);
        const slightlyOldTimestamp = slightlyOldDate.toISOString().replace(/\.\d{3}Z$/, 'Z');
        const signatureHeader = generateValidSignature(slightlyOldTimestamp, payload);
        expect(verifyWebhookSignature(payload, signatureHeader, signingSecret, { toleranceInSeconds: customTolerance })).toBe(true);
    });

    it('should throw an error for an invalid signature header format', () => {
        const invalidHeader = 'invalid_header_format';
        expect(() => verifyWebhookSignature(payload, invalidHeader, signingSecret)).toThrow('Invalid signature header');
    });
});
