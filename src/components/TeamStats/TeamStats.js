import React from 'react';
import './TeamStats.css';

const TeamStats = (props) => {
    // const { price } = props.players;
    let totalBudget = 0;
    props.players.forEach(element => {
        totalBudget = totalBudget + element.price;
    })
    // console.log(props)
    return (
        <div>
            <h3 className='mt-3 '>Player selected: {props.players.length}</h3>
            <h4 className='mt-3'>Total Budget: <span className="text-bold">{totalBudget.toFixed(2)}M USD</span> </h4>
        </div>
    );
};

export default TeamStats;