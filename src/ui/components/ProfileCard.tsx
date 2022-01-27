import '../style/profileCard.scss';
import ProfileIcon from './ProfileIcon';
import users from "../data/users.js";

interface ProfileCardProps {
    username: string
    caption: string
    iconSize: string
    hideAccountName: any
    image: any
}

const ProfileCard = (props: ProfileCardProps) => {

    const {
        username,
        caption,
        iconSize,
        hideAccountName,
        image,
    } = props;

    let accountName = username
        ? username
        : users[Math.floor(Math.random() * users.length)].USERNAME;

    return (
        <div className="profileCard">
            <ProfileIcon iconSize={iconSize} image={''} />
            {(accountName || caption) && !hideAccountName && (
                <div className="textContainers">
                    <span className="accountNames" >{accountName}</span>
                    <span className={`captions`} >{caption}</span>
                </div>

            )}
        </div>
    )
}
export default ProfileCard;