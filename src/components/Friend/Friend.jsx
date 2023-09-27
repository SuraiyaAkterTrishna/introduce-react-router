/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div className="friend">
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show more detail</Link></p>
        </div>
    );
};

export default Friend;