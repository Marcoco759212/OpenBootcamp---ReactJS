import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProfilePage = () => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }

    return (
        <div>
            <h1>Your profile</h1>
            <div>
                <button onClick={ () => navigateTo('/tasks') }>
                    Tasks
                </button>
            </div>
            <div>
                <button onClick={ goBack }>
                    Go to back
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
