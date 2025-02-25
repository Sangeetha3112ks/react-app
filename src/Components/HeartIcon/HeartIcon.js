import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './HeartIcon.css';

const HeartIcon = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="hearticon" onClick={handleClick}>
            {isActive ? (
                <FontAwesomeIcon icon={faHeartSolid} style={{ color: 'red' }} />
            ) : (
                <FontAwesomeIcon icon={faHeartRegular} />
            )}
        </div>
    );
};

export default HeartIcon;