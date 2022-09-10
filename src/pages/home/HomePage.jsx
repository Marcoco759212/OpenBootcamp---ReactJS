import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const HomePage = () => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    const goBack = () => {
        history(-1);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ () => navigate('/profile')}>
                    Go to profile
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

export default HomePage;
