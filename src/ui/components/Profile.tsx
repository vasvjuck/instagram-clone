import '../style/profile.scss';
import ProfileIcon from "./ProfileIcon";
import users from "../data/users.js";
import { Link } from 'react-router-dom';

interface ProfileProps {
    username: string
    caption: string;
    followers: number;
    following: number,
    iconSize: string;
    job: string;
    hideAccountName: any;
    image: any;
}

const Profile = (props: ProfileProps) => {
    const {
        username,
        caption,
        followers,
        following,
        iconSize,
        job,
        hideAccountName,
        image
    } = props;

    let accountName = username
        ? username
        : users[Math.floor(Math.random() * users.length)].USERNAME;

    return (
        <div className="profile">
            <div className="profile__header">
                <span className="follow">{followers} <b>Followers</b></span>
                <Link to="/profilepage">
                    <div>
                        <ProfileIcon iconSize={iconSize} image={''} />
                    </div>
                </Link>
                <span className="follow">{following} <b>Following</b></span>
            </div>
            {
                (accountName || caption) && !hideAccountName && (
                    <div className="textContainer">
                        <div className="accountName" > {accountName}</div>
                        <div className={`caption`} >  {job}</div>
                        <span className={`caption`} > {caption}</span>
                    </div>
                )
            }
            <div className="edit__btn">
                <Link to="/editpage" className="btn__cancel">
                    <a className="" href="/">Edit profile</a>
                </Link>
                <Link to="/newpost" className="btn__save">
                    <a className="" href="/">New post</a>
                </Link>
            </div>
            <div className="profile__footer">
                <span>About Help Privacy Terms Locations Language 2020 LinksTagram</span>
            </div>
        </div >
    );
}
export default Profile;