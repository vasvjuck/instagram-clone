import '../style/editPage.scss';
import EditInfo from "./EditInfo";
import image from '../images/avatar2.jpg';

const EditPage = () => {

    return (
        <div className="editPage">
            <EditInfo
                image={image}
                iconSize="edit"
            />
        </div>
    );
}
export default EditPage;