import {player1, player2} from './players.js';
import {createElement} from '../utils/CreateElement/Index.js';
import {generateLogs} from '../utils/Log/Index.js';

/**
 * функция выводит div элемент победивщего игрока
 * @param {string} name
 * @returns { HTMLElement}
 */
export const playerWin = (name) => {
    const $resultTitle = createElement("div", "loseTitle");
    
    if (name) {
        $resultTitle.innerText = name + " win!!!";
    } else {
        $resultTitle.innerText = "draw!";
        // generateLogs('draw');
    }

    return $resultTitle;
}