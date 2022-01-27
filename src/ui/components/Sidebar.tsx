import '../style/sidebar.scss';
import Sticky from "react-sticky-el";
import Profile from './Profile';
import image from '../images/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { useEffect } from 'react';
import { getAccount } from '../actions/userActions';

const Sidebar = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state: RootState) => state.user.userData)
    console.log(userData)
    const userInfo = Object.values(userData)
    useEffect(() => {
        dispatch(getAccount())
    }, [])
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile
                    username={userInfo[0]}
                    caption={userInfo[1]}
                    followers={userInfo[4]}
                    following={userInfo[5]}
                    job={userInfo[6]}
                    iconSize="big"
                    image={image}
                    hideAccountName={undefined}
                />
            </div>
        </Sticky>
    );
}
export default Sidebar;