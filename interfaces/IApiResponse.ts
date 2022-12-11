export interface IApiResponse<T> {
    message?: string | undefined;
    data?: T;
}
