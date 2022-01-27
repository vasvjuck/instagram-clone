import '../style/cards.scss';
import Stories from "./Stories";
import Card from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const Cards = () => {
    const postData = useSelector((state: RootState) => state.post.postData)

    const postsList = postData.map((postinfo) => {
        const { comments_count, description, likes_count, is_liked, photos } = postinfo;
        return (
            <Card
                accountName=""
                image={photos[0].url}
                subtitle={description}
                likedByNumber={likes_count}
                commentByNumber={comments_count}
            />)
    })
    return (
        <div className="cards">
            <Stories />
            {postsList}
            <Card
                accountName=""
                image="https://picsum.photos/560/560"
                subtitle="TB to New York October 2018.You shouldn't wait for other people to make special things happen.You have to create your own memories. Heidi Klum. Heidi Klum"
                likedByNumber={89}
                commentByNumber={16}
            />
            {/* <Card
                accountName=""
                image="https://picsum.photos/560/559"
                subtitle="TB to New York October 2018.  You shouldn't wait for other people to make special things happen.You have to create your own memories. Heidi Klum"
                likedByNumber={343}
                commentByNumber={16} 
            />*/}
        </div>
    )
}
export default Cards;