import React, { useContext } from "react";
import { UserContext } from "../Context/firebase-context";
import { SignOutUser } from "../Context/firebase";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await SignOutUser();
        navigate("/Login");
    };

    if (!currentUser) {
       
        return <div className="profile-container">Loading...</div>;
    }

    return (
        <div className="profile-info">
            <h2>{currentUser.fullName}</h2>
            <span>{currentUser.username}</span>
            <span>{currentUser.email}</span>
            <span>{currentUser.address}</span>
            <span>{currentUser.phone}</span>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    );
};

export default UserProfile;