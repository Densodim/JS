import {player1, player2} from "./players.js";
import {generateLogs} from './Logs.js';
import {enemyAttack, playerAttak} from './Attak.js';
import {createPlayer} from './createPlayer.js';
import {showResult} from './showResult.js';
import {$arenas, $formFight} from './utils.js';


generateLogs('start', player1, player2);

$formFight.addEventListener("submit", function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttak();


    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1);
    }
    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('defence', player1, player2);

    }

    // const chosenPlayer = choosePlayer();
    // chosenPlayer.changeHP(getRandom(attack.value));
    // chosenPlayer.renderHP();
    // console.log(chosenPlayer);
    showResult();
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
