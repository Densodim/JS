import {getRandom} from '../../utils/Rendom/Index.js';


export const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];
/**
 * функция атаки пративника
 * @returns {{hit: string, defence: string, value: number}}
 */
export const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    };
}


/**
 * функция атаки игрока
 * {element} item,
 * @returns {number}
 * @return {*} ..rest
 */
export const playerAttak = () => {
    const attack = {};
    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
}

