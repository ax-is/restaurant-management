import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoadCircleExclamation, faBackward} from '@fortawesome/free-solid-svg-icons';

function Pagenotfound(props) {
    return (
        <div className='PageNotFound'>
            <FontAwesomeIcon icon={faRoadCircleExclamation} style={{ mixBlendMode: 'multiply', fontSize: '100px' }} />
            <h1>Page Not Found</h1>
            <Link to='/' className='go-back'>
                <FontAwesomeIcon icon={faBackward} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                Go Home
            </Link>
        </div>
    );
}

export default Pagenotfound;
