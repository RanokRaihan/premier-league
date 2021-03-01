//this is player component. 
import React, { useState } from 'react';
import './Players.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    // object destructuring

    const { name, country, playingRole, age, image, price } = props.player;
    const [buttonText, setButtonText] = useState('select player');
    const [buttonColor, setButtonColor] = useState('#24bd2b');

    return (
        <div className='single-player'>
            <div className="profile-image">
                <img src={image} alt='' />
            </div>

            <div className="player-details">
                <h4>{name}</h4>
                <p>{country}</p>
                <p>Age: {age} Years</p>
                <p className='playing-role'>Playing Role: {playingRole}</p>
                <p>Auction Money: <span className='text-bold'>{price}M USD</span>  </p>
                <button style={{ background: buttonColor }} onClick={() => props.handleAddPlayer(props.player, setButtonText, setButtonColor)} className='btn btn-select'> <FontAwesomeIcon icon={faCheckCircle} className='check-icon' /> {buttonText}</button>
            </div>

        </div >
    );
};

export default Players;