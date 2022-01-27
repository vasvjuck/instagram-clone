import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import PostInfo from './PostInfo';

const PostPage = () => {

    const postData = useSelector((state: RootState) => state.post.postData)
    const postsList = postData.map((postinfo) => {
        const { photos, likes_count, author } = postinfo;
        return (
            <div className="postPage">
                <PostInfo
                    mainImage="https://picsum.photos/375/420"
                    username={'Nettie Fernandez'}
                    likedByNumber={likes_count}
                />
            </div>
        )
    })
    return <>{postsList}</>
}
export default PostPage;