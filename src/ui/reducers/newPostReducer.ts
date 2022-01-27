interface NewPostState {
    newPostData: any[];
    error: null | string;
}
export enum NewPostActionTypes {
    FETCH_NEWPOST = "FETCH_NEWPOST",
    FETCH_NEWPOST_ERROR = "FETCH_NEWPOST_ERROR",
}
interface FetchNewPostAction {
    type: NewPostActionTypes.FETCH_NEWPOST;
    payload: any[]
}

interface FetchNewPostErrorAction {
    type: NewPostActionTypes.FETCH_NEWPOST_ERROR;
    payload: string;
}

export type NewPostAction = FetchNewPostAction | FetchNewPostErrorAction

export const initialState: NewPostState = {
    newPostData: [],
    error: null
}


export const newPostReducer = (state = initialState, action: NewPostAction): NewPostState => {
    switch (action.type) {
        case NewPostActionTypes.FETCH_NEWPOST:
            return { ...state, newPostData: action.payload }
        case NewPostActionTypes.FETCH_NEWPOST_ERROR:
            return { error: action.payload, newPostData: [] }
        default:
            return state
    }
}
