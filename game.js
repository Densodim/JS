import {player1, player2} from './player/players.js';
import {generateLogs} from './utils/Log/Index.js';
import {enemyAttack, playerAttak} from './player/Attak/Index.js';
import {createPlayer} from './player/createPlayer.js';
import {showResult} from './player/showResult.js';
import { changeHP } from './player/HPplayers.js';


class Game {
    constructor(){}
       start = () =>{
            const $formFight = document.querySelector(".control");
            const $arenas = document.querySelector(".arenas");

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
    generateLogs('start', player1, player2);



$formFight.addEventListener("submit", function (e) {
    e.preventDefault();

    const player = playerAttak();
    const enemy = enemyAttack();

    // console.log('enemy',enemy.value);
    // console.log('player', player.value);
   

    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1);
    }else {
        generateLogs('defence', player1, player2);
    }
    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('defence', player1, player2);
    }else {
        generateLogs('hit', player2, player1);
    }

    // const chosenPlayer = choosePlayer();
    // chosenPlayer.changeHP(getRandom(attack.value));
    // chosenPlayer.renderHP();
    // console.log(chosenPlayer);


    showResult(player1, player2);
});

        }
    
}

export default Game;