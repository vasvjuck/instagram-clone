import '../style/newPost.scss';
import { Link } from 'react-router-dom';
import { newPost } from '../actions/userActions'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const s3Config = {
    bucketName: '',
    region: '',
    accessKeyId: '',
    secretAccessKey: '',
}

const NewPost = () => {

    const dispatch = useDispatch()

    const createPost = (description: string) => {
        dispatch(newPost(description))
        console.log('one')
    }

    const handleImageUpload = (event: any) => {
        const files = event.target.files[0]
        const formData = new FormData()
        formData.append('image', files)
        console.log(files)
    }

    const [description, setDescription] = useState('')
    return (
        <div className="newPost">
            <div className="newPost__content">
                <div className="newPost__image">
                    <input
                        type="file"
                        onChange={handleImageUpload} />
                </div>
                <div className="description__input">
                    <div className="inpt__text">Description</div>
                    <input
                        className="input"
                        type="text"
                        placeholder="Description..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="edit__btn">
                    <Link to="/homepage" className="btn__cancel">
                        <button className="c">Cancel</button>
                    </Link>
                    <Link to="/homepage" className="btn__save">
                        <button onClick={() => createPost(description)} className="b" >Post</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NewPost;