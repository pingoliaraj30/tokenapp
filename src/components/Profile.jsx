import React from 'react';

const Profile = () => {
    const userName = localStorage.getItem("userName");

    return (
        <div className="container mt-5">
            <h2>Welcome, {userName}!</h2>
            <p>This is your profile page.</p>
        </div>
    );
};

export default Profile;
