/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface EventSubscriptionsListRequest {
    /**
     * Limit the size of the list that is returned. The default (and maximum) is 100 objects.
     */
    limit?: number;
    /**
     * The cursor to use for pagination. If not set, the first page of results will be returned.
     */
    cursor?: string;
}
