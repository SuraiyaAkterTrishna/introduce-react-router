import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className="post">
            <h3>Title: {title}</h3>
            <p>Detail: {body}</p>
            {/* <p><Link to={`/post/${id}`}>Show more detail</Link></p> */}
            {/* <Link to={`/post/${id}`}><button>Show Detail</button></Link> */}
            <button onClick={handleNavigation}>Show more Detail</button>
        </div>
    );
};

export default Post;