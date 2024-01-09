import {player1, player2} from './players.js';
import {createElement} from './createElement.js';
import {generateLogs} from './Logs.js';

/**
 * функция выводит div элемент победивщего игрока
 * @param {string} name
 * @returns { HTMLElement}
 */
export const playerWin = (name) => {
    const $resultTitle = createElement("div", "loseTitle");
    console.log(name);
    if (name) {
        $resultTitle.innerText = name + " win!!!";
    } else {
        $resultTitle.innerText = "draw!";
        // generateLogs('draw');
    }

    return $resultTitle;
}