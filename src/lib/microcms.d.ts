export declare const client: {
    get: <T = any>({ endpoint, contentId, queries, customRequestInit, }: import("microcms-js-sdk").GetRequest) => Promise<T>;
    getList: <T_1 = any>({ endpoint, queries, customRequestInit, }: import("microcms-js-sdk").GetListRequest) => Promise<import("microcms-js-sdk").MicroCMSListResponse<T_1>>;
    getListDetail: <T_2 = any>({ endpoint, contentId, queries, customRequestInit, }: import("microcms-js-sdk").GetListDetailRequest) => Promise<T_2 & import("microcms-js-sdk").MicroCMSContentId & import("microcms-js-sdk").MicroCMSDate>;
    getObject: <T_3 = any>({ endpoint, queries, customRequestInit, }: import("microcms-js-sdk").GetObjectRequest) => Promise<T_3 & import("microcms-js-sdk").MicroCMSDate>;
    getAllContentIds: ({ endpoint, alternateField, draftKey, filters, orders, customRequestInit, }: import("microcms-js-sdk").GetAllContentIdsRequest) => Promise<string[]>;
    getAllContents: <T_4 = any>({ endpoint, queries, customRequestInit, }: import("microcms-js-sdk").GetAllContentRequest) => Promise<(T_4 & import("microcms-js-sdk").MicroCMSContentId & import("microcms-js-sdk").MicroCMSDate)[]>;
    create: <T_5 extends Record<string | number, any>>({ endpoint, contentId, content, isDraft, customRequestInit, }: import("microcms-js-sdk").CreateRequest<T_5>) => Promise<import("microcms-js-sdk").WriteApiRequestResult>;
    update: <T_6 extends Record<string | number, any>>({ endpoint, contentId, content, isDraft, customRequestInit, }: import("microcms-js-sdk").UpdateRequest<T_6>) => Promise<import("microcms-js-sdk").WriteApiRequestResult>;
    delete: ({ endpoint, contentId, customRequestInit, }: import("microcms-js-sdk").DeleteRequest) => Promise<void>;
};
export declare const getBlogs: () => Promise<import("microcms-js-sdk").MicroCMSListResponse<any>>;
export declare const getBlog: (id: string) => Promise<any>;
