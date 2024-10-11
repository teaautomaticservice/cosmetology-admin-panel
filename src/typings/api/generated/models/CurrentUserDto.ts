/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CurrentUserDto = {
    email: string;
    displayName: string;
    status: CurrentUserDto.status;
    type: CurrentUserDto.type;
};
export namespace CurrentUserDto {
    export enum status {
        BLOCKED = 'blocked',
        DELETED = 'deleted',
        DELETED_BY_GDPR = 'deletedByGdpr',
        ACTIVE = 'active',
        BANNED = 'banned',
        DEACTIVATED = 'deactivated',
    }
    export enum type {
        OPERATOR = 'operator',
        CLIENT = 'client',
        ADMINISTRATOR = 'administrator',
        SUPER_ADMINISTRATOR = 'superAdministrator',
    }
}

