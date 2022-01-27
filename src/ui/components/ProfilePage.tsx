import '../style/profilePage.scss';
import Header from './header';
import ProfileInfo from './ProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles, getAllProfiles, getAccount } from '../actions/userActions'
import { useEffect } from 'react';
import { RootState } from '../reducers';

const ProfilePage = () => {
    const userData = useSelector((state: RootState) => state.user.userData)
    const userInfo = Object.values(userData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccount())
    }, [])


    return (
        <div className="profilePage">
            <Header />

            <ProfileInfo
                iconSize="profile"
                userName={userInfo[0]}
                job={userInfo[6]}
                caption={userInfo[1]}
                followers={userInfo[4]}
                following={userInfo[5]}
                img
            />
        </div>
    )
}
export default ProfilePage;