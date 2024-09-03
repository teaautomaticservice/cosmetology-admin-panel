/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param page
     * @param pageSize
     * @returns any
     * @throws ApiError
     */
    public static logsControllerGetList(
        page: string,
        pageSize: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logs/list',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
}
