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

export const ToggleSortMenuVisibility = () => {
    return {
        type: 'TOGGLESORTMENUVISIBILITY'
    }
}

export const SortByPrice = () => {
    return {
        type: 'SORTBYPRICE'
    }
}

export const SortByYear = () => {
    return {
        type: 'SORTBYYEAR'
    }
}

export const OpenEditModal = (id:number) => {
    return {
        type: 'OPENEDITMODAL',
        payload: id
    }
}

export const CloseEditModal = (name:string, price:number) => {
    return {
        type: 'CLOSEEDITMODAL',
        payload: {
            name: name,
            price: price
        }
    }
}

export const DeleteElement = (id: number) => {
    return {
        type: 'DELETEELEMENT',
        payload: id
    }
}

// export const testAction = () => {  //Для себя оставил, не жалуйтесь
//     return {
//         type: "TEST"
//     }
// }