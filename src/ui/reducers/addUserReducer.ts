interface UserState {
    userData: any[] | string;
    error: null | string;
}
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    USER_LOGOUT = "USER_LOGOUT",
    FETCH_TOKEN = "FETCH_TOKEN",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    payload: any[]
}
interface FetchTokenAction {
    type: UserActionTypes.FETCH_TOKEN;
    payload: string
}
interface UserLogoutAction {
    type: UserActionTypes.USER_LOGOUT;
    payload: []
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchTokenAction | UserLogoutAction

export const initialState: UserState = {
    userData: [],
    error: null
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { ...state, userData: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return { error: action.payload, userData: [] }
        case UserActionTypes.FETCH_TOKEN:
            return { error: null, userData: action.payload }
        case UserActionTypes.USER_LOGOUT:
            return { error: null, userData: [] }
        default:
            return state
    }
}
