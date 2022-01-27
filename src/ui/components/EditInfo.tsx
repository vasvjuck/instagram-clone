import '../style/story.scss';
import ProfileIcon from "./ProfileIcon";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, getAccount } from '../actions/userActions'
import { useEffect } from 'react';
import { RootState } from '../reducers';
import { UserActionTypes } from '../reducers/addUserReducer';

const EditInfo = (props: { image: any; iconSize: string; }) => {

    const {
        image,
        iconSize,
    } = props;

    const dispatch = useDispatch()
    const logOut = () => {
        dispatch({ type: UserActionTypes.FETCH_USERS, payload: [] })
        dispatch({ type: UserActionTypes.FETCH_TOKEN, payload: [] })
    }
    const edit = (firstname: string, lastname: string, job: string, description: string) => {
        dispatch(editProfile(firstname, lastname, job, description))
    }
    const userData = useSelector((state: RootState) => state.user.userData)
    const userInfo = Object.values(userData)

    const [firstname, setFirstName] = useState(userInfo[3])
    const [lastname, setLastname] = useState(userInfo[7])
    const [job, setJob] = useState(userInfo[6])
    const [description, setDescription] = useState(userInfo[1])
    const [firstnameDirty, setFirstnameDirty] = useState(false)
    const [firstnameError, setFirstnameError] = useState('FirstName cannot be empty...')
    const [lastnameDirty, setLastnameDirty] = useState(false)
    const [lastnameError, setLastnameError] = useState('LastName cannot be empty...')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (firstnameError || lastnameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [firstnameError, lastnameError])

    const firstnameHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(e.target.value)
        if (!e.target.value) {
            setFirstnameError('FirstName cannot be empty...')
        } else {
            setFirstnameError('')
        }
    }
    const lastnameHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastname(e.target.value)
        if (!e.target.value) {
            setLastnameError('LastName cannot be empty...')
        } else {
            setLastnameError('')
        }
    }
    const blurHandler = (e: { target: { name: string; }; }) => {
        switch (e.target.name) {
            case 'firstname':
                setFirstnameDirty(true)
                break
            case 'lastname':
                setLastnameDirty(true)
                break
        }
    }

    return (
        <div className="editInfo">
            <div className="editInfo__content">
                <div className="editInfo__header">
                    <span className="title">Profile information</span>
                    <div className="logOut__btn">
                        <Link to="/login" onClick={() => logOut()} className="logOut">Log out</Link>
                    </div>

                </div>
                <div className="editInfo__main">
                    <div className="editInfo__avatar">
                        <ProfileIcon iconSize={iconSize} image={''} />
                        <a className="newPhoto" href="/">Choose new photo</a>
                    </div>
                    <div className="editInfo__text">
                        <div className="editInfo__input">
                            <div className="inpt__text">First Name</div>
                            <input
                                className="input"
                                type="text"
                                value={firstname}
                                onBlur={e => blurHandler(e)}
                                name="firstname"
                                onChange={e => firstnameHandler(e)}
                            />
                            {(firstnameDirty && lastnameDirty) && <div style={{ color: 'red', fontWeight: 400, fontSize: 12 }}> {firstnameError}</div>}
                        </div>
                        <div className="editInfo__input one">
                            <div className="inpt__text">Second Name</div>
                            <input
                                className="input"
                                type="text"
                                value={lastname}
                                onBlur={e => blurHandler(e)}
                                name="lastname"
                                onChange={e => lastnameHandler(e)}
                            />
                            {(firstnameDirty && lastnameDirty) && <div style={{ color: 'red', fontWeight: 400, fontSize: 12 }}> {lastnameError}</div>}
                        </div>
                    </div>
                </div>
                <div className="job__input">
                    <div className="inpt__text">Job Title</div>
                    <input
                        className="input"
                        type="text"
                        value={job}
                        onChange={e => setJob(e.target.value)} />
                </div>
                <div className="description__input">
                    <div className="inpt__text">Description</div>
                    <input
                        className="input"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="edit__btn">
                    <div className="btn__cancel">
                        <Link to="/homepage">  <button className="btn__edit" >Cancel</button> </Link>
                    </div>
                    <div className="btn__save">
                        <Link to="/homepage">  <button disabled={!formValid} onClick={() => edit(firstname, lastname, job, description)} className="btn__edit" >Save</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditInfo;
