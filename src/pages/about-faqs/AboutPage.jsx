import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('we are in Route:', location.pathname);

    const navigate = (path) => {
        history(path);
    }

    const goBack = () => {
        history(-1);
    }

    return (
        <div>
            <h1> About | faqs </h1>
            <div>
                <button onClick={ () => navigate('/')}>
                    Go to home
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

export default AboutPage;
