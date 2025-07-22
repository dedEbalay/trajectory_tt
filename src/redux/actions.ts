export interface actionInterface {
    type: string,
    payload?: any
}

export const OnLoadRequest = (posts:any) => {
    return {
        type: 'ONLOADREQUEST',
        payload: posts
    }
}

// export const testAction = () => {  //Для себя оставил, не жалуйтесь
//     return {
//         type: "TEST"
//     }
// }