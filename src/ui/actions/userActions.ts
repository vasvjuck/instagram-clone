import { Dispatch } from 'react'
import { UserActionTypes, UserAction } from '../reducers/addUserReducer'
import { CommentAction, CommentActionTypes } from '../reducers/commentReducer';
import { NewPostAction, NewPostActionTypes } from '../reducers/newPostReducer';
import { PostAction, PostActionTypes } from '../reducers/postReducer';

const baseUrl = 'https://linkstagram-api.ga'

export const fetchCreateUsers = (email: string, username: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await fetch(`${baseUrl}/create-account`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        username: username,
                        login: email,
                        password: password
                    }
                )
            });
            const data = await response.json()
            const authToken = response.headers.get("Authorization") ?? "";

            sessionStorage.removeItem("error");
            if (response.status === 422) {
                const errorToastify = response.status.toString()
                dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: errorToastify })
                sessionStorage.setItem("error", errorToastify);
            }

            if (authToken.length === 0) {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: "Can't get auth token"
                });
                return;
            }
            dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: authToken ?? "" })
            sessionStorage.setItem("authToken", authToken);

        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const fetchLogInAccount = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        login: email,
                        password: password
                    }
                )
            });
            const data = await response.json()
            const authToken = response.headers.get("Authorization") ?? "";
            console.log(data)
            if (response.status === 401) {
                const errorToastify = response.status.toString()
                dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: errorToastify })
                sessionStorage.setItem("error", errorToastify);
            }

            if (authToken.length === 0) {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: "Can't get auth token"
                });
                return;
            }
            dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: authToken ?? "" })
            sessionStorage.setItem("authToken", authToken);
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const fetchComment = (comment: string) => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {
            const authToken = sessionStorage.getItem("authToken");
            const response = await fetch(`${baseUrl}/posts/349/comments`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(
                    {
                        message: comment
                    }
                )
            });
            const data = await response.json()


            dispatch({ type: CommentActionTypes.FETCH_COMMENT, payload: data })
        } catch (e) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENT_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const editProfile = (firstname: string, lastname: string, job: string, description: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const authToken = sessionStorage.getItem("authToken");
            const response = await fetch(`${baseUrl}/account`, {
                method: 'PATCH',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(
                    {
                        account: {
                            username: firstname,
                            description: description,
                            first_name: firstname,
                            last_name: lastname,
                            job_title: job
                        }
                    }
                )
            });
            const data = await response.json()

            dispatch({ type: UserActionTypes.FETCH_USERS, payload: data })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getAccount = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const authToken = sessionStorage.getItem("authToken");
            const response = await fetch(`${baseUrl}/account`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                mode: 'cors',
                cache: 'default'
            });
            const data = await response.json()
            dispatch({ type: UserActionTypes.FETCH_USERS, payload: data })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getUserPost = (username: string) => {
    console.log(username)
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            const response = await fetch(`${baseUrl}/profiles/dimchykus/posts`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                mode: 'cors',
                cache: 'default'
            });
            const data = await response.json()

            dispatch({ type: PostActionTypes.FETCH_POST, payload: data })
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POST_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getAllPost = () => {
    return async (dispatch: Dispatch<NewPostAction>) => {
        try {
            const response = await fetch(`${baseUrl}/posts`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                mode: 'cors',
                cache: 'default'
            });
            const data = await response.json()

            dispatch({ type: NewPostActionTypes.FETCH_NEWPOST, payload: data })
        } catch (e) {
            dispatch({
                type: NewPostActionTypes.FETCH_NEWPOST_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const newPost = (description: string,) => {
    return async (dispatch: Dispatch<NewPostAction>) => {
        try {
            const authToken = sessionStorage.getItem("authToken");
            const response = await fetch(`${baseUrl}/posts`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(
                    {
                        post: {
                            description: description,
                            photos_attributes: [
                                {
                                    "image": {
                                        "id": "23cf096f93e15a6a9d8267895e.jpg",
                                        "storage": "cache",
                                        "metadata": {
                                            "filename": "1test.jpg",
                                            "size": 68393,
                                            "mime_type": "image/jpeg"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                )
            });
            const data = await response.json()
            console.log(data)
            dispatch({ type: NewPostActionTypes.FETCH_NEWPOST, payload: data })
        } catch (e) {
            dispatch({
                type: NewPostActionTypes.FETCH_NEWPOST_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const deletePost = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const authToken = sessionStorage.getItem("authToken");
            const response = await fetch(`${baseUrl}/posts/373`, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                }
            });
            const data = await response.json()
            console.log(data)
            dispatch({ type: UserActionTypes.FETCH_USERS, payload: data })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getProfiles = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await fetch(`${baseUrl}/profiles/Sasha`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                mode: 'cors',
                cache: 'default'
            });
            const data = await response.json()

            dispatch({ type: UserActionTypes.FETCH_USERS, payload: data })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getAllProfiles = () => {
    return async (dispatch: Dispatch<NewPostAction>) => {
        try {
            const response = await fetch(`${baseUrl}/profiles`, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                mode: 'cors',
                cache: 'default'
            });
            const data = await response.json()
            dispatch({ type: NewPostActionTypes.FETCH_NEWPOST, payload: data })
        } catch (e) {
            dispatch({
                type: NewPostActionTypes.FETCH_NEWPOST_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const setLike = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const authToken = sessionStorage.getItem("authToken");
        const response = await fetch(`${baseUrl}/posts/390/like`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({})
        });
    }
}
export const deleteLike = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const authToken = sessionStorage.getItem("authToken");
        const response = await fetch(`${baseUrl}/posts/390/like`, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({})
        });
    }
}