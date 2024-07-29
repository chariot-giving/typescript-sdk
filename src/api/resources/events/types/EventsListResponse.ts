/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Chariot from "../../../index";

export interface EventsListResponse {
    results?: Chariot.Event[];
    /**
     * A cursor token to use to retrieve the next page of results by making another API call
     * to the same endpoint with the same parameters (only changing the pageToken). If
     * specified, then more results exist on the server that were not returned, otherwise
     * no more results exist on the server.
     */
    nextPageToken?: string;
}
