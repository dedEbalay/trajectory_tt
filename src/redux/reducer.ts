import { Post } from '../interfaces'
import { actionInterface } from './actions'

interface stateInterface {
    posts: Post[],
    sortMenuVisibility: boolean,
    editModalVisibility: boolean,
    sortList: string[],
    currentPost: Post,
    currentSorting: string
}

const initialState = {
    posts: [],
    sortMenuVisibility: false,
    editModalVisibility: false,
    sortList: ['YEAR', 'PRICE'],
    currentSorting: 'default',
    currentPost: {
        name: '',
        model: '',
        year: 0,
        price: 0,
        color: '',
        id: 0,
        latitude: 0,
        longtitude: 0
    }
}

const reducer = (state:stateInterface=initialState, action: actionInterface) => {
    function createArr(id:number) {
        const indexOfElem = state.posts.findIndex((elem:Post) => elem.id === id),
            beforeArr = state.posts.slice(0, indexOfElem),
            afterArr = state.posts.slice(indexOfElem+1)
        return [...beforeArr, ...afterArr]
    }
    function sorting(sortType:string, array: Post[]) {
        switch (sortType) {
            case 'default':
                array.sort((a,b) => a.id - b.id)
                return array
            case 'year': 
                array.sort((a,b) => a.year - b.year)
                return array
            case 'price':
                array.sort((a,b) => a.price - b.price)
                return array
        }
    }
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
        case 'TOGGLESORTMENUVISIBILITY':     
            return {
                ...state,
                sortMenuVisibility: !state.sortMenuVisibility
            }
        case 'SORTBYPRICE':
            const arrSortByPrice = sorting('price', state.posts.map(item => item))
            return {
                ...state,
                currentSorting: 'price',
                posts: arrSortByPrice
            }
        case 'SORTBYYEAR':
            const arrSortByYear = sorting('year', state.posts.map(item => item))
            return {
                ...state,
                currentSorting: 'year',
                posts: arrSortByYear
            }
        case 'OPENEDITMODAL':
            const newCurrPost = state.posts.find((item:Post) => item.id === action.payload)
            return {
                ...state,
                currentPost: newCurrPost,
                editModalVisibility: true
            }
        case 'CLOSEEDITMODAL':
            
                const newElement =  {
                    ...state.currentPost,
                    name: action.payload.name,
                    price: action.payload.price
                  },
                  newSubArr = createArr(state.currentPost.id),
                  newArray = sorting(state.currentSorting, [...newSubArr, newElement]  )         
            return {
                ...state,
                posts: newArray,
                editModalVisibility: false
            }
        case 'DELETEELEMENT':
            const newSubArr2 = createArr(action.payload),
                  arrWithoutElem = sorting(state.currentSorting, newSubArr2)
            
            return {
                ...state,
                posts: arrWithoutElem
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer

function createArr(id: number): Post {
    throw new Error('Function not implemented.')
}
