/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         chariotApiKey: "live_xJd0lUrvpDkzeGBWZbuI2wbvEdM"
 *     }
 *
 * @example
 *     {
 *         chariotApiKey: "live_xJd0lUrvpDkzeGBWZbuI2wbvEdM"
 *     }
 */
export interface UnintegratedGrantsListRequest {
    /**
     * the number of results to return; defaults to 10, max is 100
     */
    pageLimit?: number;
    /**
     * A token to use to retrieve the next page of results. This is useful for paginating over many pages of results. If set, all other arguments are expected to be kept the same as previous calls and the value of this field should be from the nextPageToken in the previous response.
     */
    pageToken?: string;
    /**
     * the `apiKey` of the Connect object
     */
    chariotApiKey: string;
}
