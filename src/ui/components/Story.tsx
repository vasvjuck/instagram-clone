import '../style/story.scss';
import ProfileIcon from "./ProfileIcon";
import image from '../images/images.jpg';

const Story = () => {

    return (
        <div className="story">
            <ProfileIcon iconSize="medium" image={image} />
        </div>
    )
}
export default Story;