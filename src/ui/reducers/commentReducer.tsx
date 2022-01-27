interface CommentState {
    commentData: any[];
    error: null | string;
}
export enum CommentActionTypes {
    FETCH_COMMENT = "FETCH_COMMENT",
    FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR",
}
interface FetchCommenttAction {
    type: CommentActionTypes.FETCH_COMMENT;
    payload: any[]
}

interface FetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENT_ERROR;
    payload: string;
}

export type CommentAction = FetchCommenttAction | FetchCommentErrorAction

export const initialState: CommentState = {
    commentData: [],
    error: null
}


export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENT:
            return { ...state, commentData: action.payload }
        case CommentActionTypes.FETCH_COMMENT_ERROR:
            return { error: action.payload, commentData: [] }
        default:
            return state
    }
}
