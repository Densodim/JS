import {player1, player2} from './players.js';
import {playerWin} from './playerWin.js';
import {$arenas, $submitButton} from './utils.js';
import {createReloadButton} from './ReloadButton.js';
import {generateLogs} from './Logs.js';

/**
 * функция проверки какой игрок победил, $submitButton.disabled = true; - отключает кнопку figth. и создает кнопку перезагрузки, Деструктуризация
 * @returns {Element}
 */
export const showResult = ()=> {

    const {hp:hp1,name:name1} = player1;
    const {hp:hp2, name:name2} = player2;
    if (hp1 === 0 || hp2 === 0) {
        $submitButton.disabled = true;

        createReloadButton().addEventListener("click", function () {
            window.location.reload();
        });

    }
    if (hp1 === 0 && hp1 < hp2) {
        $arenas.appendChild(playerWin(name2));
    } else if (hp2 === 0 && hp2 < hp1) {
        $arenas.appendChild(playerWin(name1));
    } else if (hp1 === 0 && hp1 === hp2) {
        $arenas.appendChild(playerWin());
        generateLogs('draw');
    }
}