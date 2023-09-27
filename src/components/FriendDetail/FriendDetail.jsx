import { useLoaderData } from "react-router-dom";


const FriendDetail = () => {
    const friend = useLoaderData();
    
    return (
        <div>
            <h1>Name: {friend.name}</h1>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;