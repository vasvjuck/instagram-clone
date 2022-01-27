import '../style/postPage.scss';
import image from '../images/images.jpg';
import ProfileIcon from './ProfileIcon';
import like from '../images/like.svg';
import { fetchComment } from '../actions/userActions'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';

interface PostInfoProps {
    mainImage: any;
    username: string;
    likedByNumber: number;
}

const PostInfo = (props: PostInfoProps) => {

    const [comment, setComment] = useState('')

    const commentHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
        setComment(e.target.value)
    }

    const dispatch = useDispatch()

    const leaveComment = (comment: string) => {
        dispatch(fetchComment(comment))
    }


    const {
        mainImage,
        username,
        likedByNumber,
    } = props;

    return (
        <div className="postInfo">
            <div className="postInfo__content">
                <div className="postInfo__photo">
                    <img className="cardImage" src={mainImage} alt="card content" />
                </div>
                <div className="postInfo__text">
                    <div className="postInfo__header">
                        <ProfileIcon image={''} iconSize="small" />
                        <div className="username">{username}</div>
                        <Link to="/homepage" >   <button className="close"></button></Link>
                    </div>
                    <div className="postInfo__main__container">
                        <div className="postInfo__main">
                            <ProfileIcon iconSize="small" image={image} />
                            <div className="postInfo__main__comment">
                                <p className="comment">Nice!</p>
                                <p className="time"> 12 min</p>
                            </div>
                        </div>
                        <div className="postInfo__main">
                            <ProfileIcon iconSize="small" image={image} />
                            <div className="postInfo__main__comment">
                                <p className="comment">Pretty cool photos, I left you a message
                                    in private messages, waiting for
                                    a response)</p>
                                <p className="time">12 min</p>
                            </div>
                        </div>
                    </div>

                    <div className="like__btn">
                        <a className="likes__btn" href="/">
                            <FontAwesomeIcon id="like" className="likes" icon={faHeart} />
                            <span className="like">{likedByNumber}</span>
                        </a>
                    </div>
                    <div className="postInfo__form">
                        <input
                            className="input"
                            type="text"
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={e => commentHandler(e)}
                        />
                        <Link to="/homepage" >
                            <button onClick={() => leaveComment(comment)} className="input__btn">Post</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostInfo;