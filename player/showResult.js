import {playerWin} from './playerWin.js';
import {createReloadButton} from '../utils/Button/Index.js';
import {generateLogs} from '../utils/Log/Index.js';


const $arenas = document.querySelector(".arenas");

const $submitButton = document.querySelector(".button");
/**
 * функция проверки какой игрок победил, $submitButton.disabled = true; - отключает кнопку figth. и создает кнопку перезагрузки, Деструктуризация
 * @returns {Element}
 */
export const showResult = (player1, player2)=> {

    // console.log('player1', player1.name, 'player2', player2.name);

    if (player1.hp === 0 || player2.hp === 0) {
        $submitButton.disabled = true;

        createReloadButton().addEventListener("click", function () {
            window.location.reload();
        });

    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
        generateLogs('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name));
        generateLogs('end', player1, player2);
    } else if (player1.hp === 0 && player1.hp === player2.hp) {
        $arenas.appendChild(playerWin());
        generateLogs('draw', player1, player2);
    }
}