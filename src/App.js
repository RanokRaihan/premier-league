import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
import TeamStats from './components/TeamStats/TeamStats';
import playersData from './playerData/playerData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function App() {
  //useState for setting data fron playerdata.json
  const [player, setPlayer] = useState([]);
  //selecting player
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    setPlayer(playersData);
  }, []);

  //button click event handeler
  const handleAddPlayer = (player, setButtonText, setButtonColor) => {
    //check if the player already selected
    if (selectedPlayer.indexOf(player) === -1) {
      const newSelectedPlayer = [...selectedPlayer, player];
      setSelectedPlayer(newSelectedPlayer);
      // changing button style
      setButtonText('selected');
      setButtonColor('#606060');
    }
    else {
      //show alert
      alert('player already selected');
    }

  }
  return (
    <div>
      <Header></Header>
      <div className="row container">
        <div className="col-8  player-container">
          {
            player.map(singlePlayer => {
              return (
                <Players handleAddPlayer={handleAddPlayer} player={singlePlayer} key={singlePlayer.id}></Players>
              )
            })
          }
        </div>
        <div className="col-4 team-details">
          <div className='team-stats'>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" className="cart-icon" />
            <TeamStats players={selectedPlayer}></TeamStats>
          </div>
          <div className="selected-player">
            {
              selectedPlayer.map(player => <SelectedPlayer player={player}></SelectedPlayer>)
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
