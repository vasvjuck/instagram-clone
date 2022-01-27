import '../style/ProfileIcon.scss';
import imageOwn from '../images/avatar2.jpg';

const ProfileIcon = (props: { iconSize: string; image: any; }) => {
    const { iconSize, image } = props;

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomId = getRandomInt(1, 70);

    let profileImage = image
        ? `https://i.pravatar.cc/450?img=${randomId}`
        : imageOwn;

    return (
        <div>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />
        </div>
    );
}

export default ProfileIcon;