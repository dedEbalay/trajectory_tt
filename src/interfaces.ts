export interface Post {
    id: number,
    name: string,
    model: string,
    year: number,
    color: string,
    price: number,
    latitude: number,
    longtitude: number
}

export interface stateInterface {
    posts: Post[],
    sortMenuVisibility: boolean,
    editModalVisibility: boolean,
    sortList: string[],
    currentPost: Post,
    currentSorting: string
}