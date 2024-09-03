/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryPaginatedDto } from '../models/HistoryPaginatedDto';
import type { MessageDto } from '../models/MessageDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HistoryService {
    /**
     * @returns HistoryPaginatedDto Successful signup
     * @throws ApiError
     */
    public static historyControllerGetList(): CancelablePromise<HistoryPaginatedDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/list',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static historyControllerGetItem(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/{id}',
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static historyControllerUpdateItem(
        requestBody: MessageDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/history/{id}',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static historyControllerRemoveItem(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/{id}',
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static historyControllerAddItem(
        requestBody: MessageDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
