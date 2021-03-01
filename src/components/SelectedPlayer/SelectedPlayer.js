import React from 'react';
import './SelectedPlayer.css'

const SelectedPlayer = (props) => {
    const { name, price, image } = props.player;
    return (
        <div className='selected-player-container'>
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="selected-player-details">
                <h4>{name}</h4>
                <p>{price}M USD</p>
            </div>
        </div>
    );
};

export default SelectedPlayer;