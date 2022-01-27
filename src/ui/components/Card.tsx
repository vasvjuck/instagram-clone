import '../style/card.scss';
import ProfileCard from './ProfileCard';
import dots from '../images/dots.svg';
import arrow from '../images/arrow.svg';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLike, setLike } from '../actions/userActions'
interface CardProps {
    accountName: string;
    image: any;
    subtitle: string;
    likedByNumber: number;
    commentByNumber: number;
}


const Card = (props: CardProps) => {
    const {
        accountName,
        image,
        subtitle,
        likedByNumber,
        commentByNumber,
    } = props;

    const likeStatus = sessionStorage.getItem('like')
    const dispatch = useDispatch()

    const likes = sessionStorage.getItem('like')

    const heartFill = () => {
        switch (likes) {
            case 'false': return '#C9CAD1'
            case 'true': return 'red'
        }
    }

    const reloadPage = () => {
        let reloadHelper = true
        const removeReload = () => {
            sessionStorage.removeItem('reload')
        }
        removeReload()
        if (sessionStorage.getItem('reload') === 'reload') {
            reloadHelper = false
        }
        const reload = () => {
            window.location.reload()
        }
        if (reloadHelper) {
            sessionStorage.setItem('reload', 'reload')
            setInterval(reload, 500)
        }
    }
    const likePost = () => {
        dispatch(setLike())
        sessionStorage.setItem('like', 'true')

        reloadPage()
    }
    const unLikePost = () => {
        dispatch(deleteLike())
        sessionStorage.setItem('like', 'false')

        reloadPage()
    }
    const handleLike = () => {
        switch (likeStatus) {
            case 'false':
                return likePost()
            case 'true':
                return unLikePost()
            default: return likePost()
        }
    }
    return (
        <div className="card">
            <header className="header">
                <ProfileCard iconSize={'medium'} username={'Nettie Fernandez'} caption={'Just Now'} hideAccountName={undefined} image={image} />
                <Link to="/postpage"><img className="img__dots" src={dots} alt="" /></Link>
            </header>
            <Link to="/postpage"><img className="cardImage" src={image} alt="card content" /></Link>
            <Link to="/postpage">
                <span className="suptitle">
                    {subtitle}
                </span>
            </Link>
            <div className="cardFooter">
                <div className="likeComments">
                    <button className="likes__btn" >
                        <button onClick={() => handleLike()}> <FontAwesomeIcon style={{ color: heartFill() }} id="like" className="likes" icon={faHeart} /> </button>
                        <span className="like">{likedByNumber}</span>
                    </button>
                    <Link to="/postpage" className="likes__btn" >
                        <button> <FontAwesomeIcon className="comments" icon={faComment} /></button>
                        <span className="like">{commentByNumber}</span>
                    </Link>
                </div>
                <a href="/" className="share">
                    <span>Share</span>
                    <div className="arrow__img">
                        <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Card;