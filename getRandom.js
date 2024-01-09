/**
 * функция рендомного числа
 * @param {number} num
 * @returns {number}
 */
export function getRandom(damage) {
    // console.log(damage);
    const randomNum = Math.ceil(Math.random() * damage);
    return randomNum;
}