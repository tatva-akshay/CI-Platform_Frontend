export interface ApiResponse {
    statusCode: number,
    isSuccess: boolean,
    result: any,
    token: string,
    errorMessages: string[]    
}
