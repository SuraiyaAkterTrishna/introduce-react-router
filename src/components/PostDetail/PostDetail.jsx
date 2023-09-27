import { useLoaderData, useNavigate } from "react-router-dom";
import './PostDetail.css';

const PostDetail = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    
    return (
        <div className="detail">
            <h3>Title: {post.title}</h3>
            <p>Detail: {post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;