import { Post } from '../interfaces'
import { actionInterface } from './actions'

interface stateInterface {
    posts: Post[]
}

const initialState = {
    posts: []
}

const reducer = (state:stateInterface=initialState, action: actionInterface) => {
    switch (action.type) {
        case 'ONLOADREQUEST':         
            return {
                ...state,
                posts: action.payload
            }
        case 'TEST':
            console.log('TEST');
            return {
                ...state
            } 
        default:
            return {
                ...state
            }
    }
}

export default reducer