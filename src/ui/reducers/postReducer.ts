interface PostState {
    postData: any[];
    error: null | string;
}
export enum PostActionTypes {
    FETCH_POST = "FETCH_POST",
    FETCH_POST_ERROR = "FETCH_POST_ERROR",
}
interface FetchPostAction {
    type: PostActionTypes.FETCH_POST;
    payload: any[]
}

interface FetchPostErrorAction {
    type: PostActionTypes.FETCH_POST_ERROR;
    payload: string;
}

export type PostAction = FetchPostAction | FetchPostErrorAction

export const initialState: PostState = {
    postData: [],
    error: null
}


export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POST:
            return { ...state, postData: action.payload }
        case PostActionTypes.FETCH_POST_ERROR:
            return { error: action.payload, postData: [] }
        default:
            return state
    }
}
