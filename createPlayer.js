import {createElement} from './createElement.js';


/**
 * фунция создания игрока (в returns почему-то подтягивает все возможные элементы
 * @param {string} player
 * @returns { HTMLElement }
 */
export const createPlayer = (playerOb) => {

    const {player, hp, name, img} = playerOb;

    const $player = createElement("div", "player" + player);
    const $progressbar = createElement("div", "progressbar");
    const $character = createElement("div", "character");
    const $life = createElement("div", "life");
    $life.style.width = hp + "%";

    const $name = createElement("div", "name");
    $name.innerHTML = name;

    const $img = createElement("img");
    $img.src = img;

    $player.append($progressbar, $character);
    $progressbar.append($life, $name);
    $character.append($img);

    return $player;
}
