export interface ApiResponse {
    statusCode: number,
    isSuccess: boolean,
    result: any,
    token: string,
    rowCount : number,
    page : number,
    pageSize : number,
    errorMessages: string[]    
}
