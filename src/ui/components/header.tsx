import React from 'react';
import '../style/header.scss';
import { Link } from 'react-router-dom';
import ProfileIcon from "./ProfileIcon";
import { useDispatch } from 'react-redux';
import { UserActionTypes } from '../reducers/addUserReducer';

const Header = () => {

    const dispatch = useDispatch()
    const logOut = () => {
        dispatch({ type: UserActionTypes.FETCH_USERS, payload: [] })
        dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: [] })
    }

    return (
        <nav >
            <Link className="logo" to="/homepage">Linkstagram</Link>
            <div className="nav-links">
                <Link to="/homepage" className="nav__btn "><a href="#">Home</a></Link>
                <Link to="/login" onClick={() => logOut()} className="nav__btn "><a href="#">Log Out</a></Link>
                <Link to="/profilepage" className="nav__icon "><ProfileIcon iconSize="small" image={''} /></Link>
            </div>
        </nav>
    );
}

export default Header;