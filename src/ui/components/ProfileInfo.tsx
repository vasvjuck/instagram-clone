import '../style/profilePage.scss';
import Header from './header';
import ProfileIcon from './ProfileIcon';
import image from '../images/images.jpg';
import { Link } from 'react-router-dom';


interface ProfileInfoProps {
    iconSize: string;
    userName: string;
    job: string;
    caption: string;
    followers: string;
    following: number;
    img: any;
}

const ProfileInfo = (props: ProfileInfoProps) => {

    const {
        iconSize,
        userName,
        job,
        caption,
        followers,
        following,
        img
    } = props;

    return (
        <div className="profileInfo">
            <Header />
            <div className="profilePage__container">
                <header className="header">
                    <div className="header__icon">
                        <div className="img">
                            <ProfileIcon iconSize={iconSize} image={''} />
                        </div>
                        <div className="content">
                            <div className="userName ">{userName}</div>
                            <div className="job">{job}</div>
                            <div className="caption">{caption}</div>
                        </div>
                    </div>
                    <div className="header__info">
                        <div className="follow">
                            <div className="followers"><b>{followers} </b>{' '} Followers</div>
                            <div className="followers"><b>{following} </b> {' '} Following</div>
                        </div>
                        <div className="edit__btn">
                            <Link to="/editpage" className="btn__cancel">
                                <a className="" href="/">Edit profile</a>
                            </Link>
                            <Link to="/newpost" className="btn__save">
                                <a className="" href="/">New post</a>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="photo">
                    <div className="block__img">
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                    </div>
                    <div className="block__img">
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                    </div>
                    <div className="block__img">
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                        <ProfileIcon image={image} iconSize={'profileImg'} />
                    </div>
                </main>
            </div>
        </div>
    )
}
export default ProfileInfo;