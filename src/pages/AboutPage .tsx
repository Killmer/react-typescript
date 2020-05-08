import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>About Us</h1>
            <p>Some example of another page, as we need it for router</p>
            <button className="btn" onClick={() => history.push('/')}>Back to TodoList</button>
        </>
    )
}

export default AboutPage