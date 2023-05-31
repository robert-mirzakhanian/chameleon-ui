/**
 *
 * @export
 * @type AnyRequestDto
 */
export interface AnyRequestDto extends RequestDto {
}

/**
 * @export
 * @namespace AnyRequestDto
 */
export namespace AnyRequestDto {
}
/**
 *
 * @export
 * @interface EqualsRequestDto
 */
export interface EqualsRequestDto extends RequestDto {
    /**
     * Map with property name and expected value
     * @type {{ [key: string]: string; }}
     * @memberof EqualsRequestDto
     */
    paramMap: { [key: string]: string; };
}

/**
 * @export
 * @namespace EqualsRequestDto
 */
export namespace EqualsRequestDto {
}
/**
 *
 * @export
 * @interface IsOneOfRequestDto
 */
export interface IsOneOfRequestDto extends RequestDto {
    /**
     * Map with property name and list expected value
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IsOneOfRequestDto
     */
    paramMap: { [key: string]: Array<string>; };
}

/**
 * @export
 * @namespace IsOneOfRequestDto
 */
export namespace IsOneOfRequestDto {
}
/**
 *
 * @export
 * @interface MockDto
 */
export interface MockDto {
    /**
     * Mock document id
     * @type {string}
     * @memberof MockDto
     */
    id?: string;
    /**
     * Mock name
     * @type {string}
     * @memberof MockDto
     */
    name: string;
    /**
     * Path subbing
     * @type {string}
     * @memberof MockDto
     */
    path: string;
    /**
     * Is active stub
     * @type {boolean}
     * @memberof MockDto
     */
    active: boolean;
    /**
     * Expected request for stubbing
     * @type {Array<RequestDto>}
     * @memberof MockDto
     */
    requestDtoList: Array<RequestDto>;
}
/**
 *
 * @export
 * @interface NotEqualsRequestDto
 */
export interface NotEqualsRequestDto extends RequestDto {
    /**
     * Map with property name and not expected value
     * @type {{ [key: string]: string; }}
     * @memberof NotEqualsRequestDto
     */
    paramMap: { [key: string]: string; };
}

/**
 * @export
 * @namespace NotEqualsRequestDto
 */
export namespace NotEqualsRequestDto {
}
/**
 *
 * @export
 * @interface Pageable
 */
export interface Pageable {
    /**
     *
     * @type {number}
     * @memberof Pageable
     */
    page?: number;
    /**
     *
     * @type {number}
     * @memberof Pageable
     */
    size?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof Pageable
     */
    sort?: Array<string>;
}
/**
 * Expected request for stubbing
 * @export
 * @interface RequestDto
 */
export interface RequestDto {
    /**
     * Request type
     * @type {string}
     * @memberof RequestDto
     */
    type: RequestDto.TypeEnum;
    /**
     * Http method
     * @type {string}
     * @memberof RequestDto
     */
    method: RequestDto.MethodEnum;
    /**
     *
     * @type {ResponseDto}
     * @memberof RequestDto
     */
    response: ResponseDto;
    /**
     * Http headers
     * @type {{ [key: string]: string; }}
     * @memberof RequestDto
     */
    headers?: { [key: string]: string; };
}

/**
 * @export
 * @namespace RequestDto
 */
export namespace RequestDto {
    /**
     * @export
     * @enum {string}
     */
    export enum TypeEnum {
        ANY = <any> 'ANY',
        ISONEOF = <any> 'IS_ONE_OF',
        EQUALS = <any> 'EQUALS',
        NOTEQUALS = <any> 'NOT_EQUALS'
    }
    /**
     * @export
     * @enum {string}
     */
    export enum MethodEnum {
        GET = <any> 'GET',
        HEAD = <any> 'HEAD',
        POST = <any> 'POST',
        PUT = <any> 'PUT',
        PATCH = <any> 'PATCH',
        DELETE = <any> 'DELETE',
        OPTIONS = <any> 'OPTIONS',
        TRACE = <any> 'TRACE'
    }
}
/**
 * Expected response
 * @export
 * @interface ResponseDto
 */
export interface ResponseDto {
    /**
     *
     * @type {stringMockDto}
     * @memberof ResponseDto
     */
    value?: string;
    /**
     *
     * @type {boolean}
     * @memberof ResponseDto
     */
    isCompressed?: boolean;
    /**
     *
     * @type {number}
     * @memberof ResponseDto
     */
    status: number;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ResponseDto
     */
    headers: { [key: string]: string; };
}
