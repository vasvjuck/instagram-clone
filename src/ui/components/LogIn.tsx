import '../style/signUp.scss';
import HeaderW from './HeaderW'
import React, { useEffect, useState } from 'react';
import welcome1 from '../images/welcome.png';
import welcome2 from '../images/welcome2.png';
import welcome3 from '../images/welcome3.png';
import welcome4 from '../images/welcome4.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { fetchLogInAccount } from '../actions/userActions'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty...')
    const [passwordError, setPasswordError] = useState('Password cannot be empty...')
    const [formValid, setFormValid] = useState(false)

    const dispatch = useDispatch()

    const createUser = (email: string, password: string) => {
        dispatch(fetchLogInAccount(email, password))
    }


    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is incorrect...')
        }
        else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Password is incorrect...")
            if (!e.target.value) {
                setPasswordError('Password cannot be empty...')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: { target: { name: string; }; }) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className="login">
            <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
            <HeaderW />
            <main className="welcome">
                <div className="welcome__img">
                    <img className="welcome1" src={welcome1} alt="" />
                    <img className="welcome2" src={welcome2} alt="" />
                    <img className="welcome3" src={welcome3} alt="" />
                    <img className="welcome4" src={welcome4} alt="" />
                </div>
                <form action="" className="form">
                    <div className="form__text">Log in</div>
                    <div className="editInfo__input">
                        <div className="inpt__text">Email</div>
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" className="input" type="text" placeholder="example@mail.com" />
                        {(emailDirty && emailError) && <div style={{ color: 'red', fontWeight: 400, fontSize: 12 }}> {emailError}</div>}
                    </div>
                    <div className="editInfo__input">
                        <div className="inpt__text">Password</div>
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" className="input" type="text" placeholder="Type in..." />
                        {(passwordDirty && passwordError) && <div style={{ color: 'red', fontWeight: 400, fontSize: 12 }}> {passwordError}</div>}
                    </div>
                    <div className="signUp__btn">
                        <Link to="/homepage" >
                            <button onClick={() => createUser(email, password)} disabled={!formValid} className="btn__login " >Log in</button>
                        </Link>
                    </div>
                    <div className="signUp__text">
                        <p className="a">Don't have an account?</p>
                        <Link to="/" className="b">Sign Up</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}
export default LogIn;