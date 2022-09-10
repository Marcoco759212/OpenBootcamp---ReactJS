import React from 'react';
import {useNavigate} from 'react-router-dom'

const NotFoundPage = () => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    return (
        <div>
            <h1>404 - not found</h1>
            <div>
                <button onClick={ () => navigate('/') }>
                    Go to home
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
