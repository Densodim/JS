
/**
 * функция изминения HP
 * @param {number} player
 * @returns {number|*}
 */
export function changeHP(player) {
    this.hp -= player;
    // console.log(this.hp);
    if (this.hp <= 0) {
        this.hp = 0;
    }
    return this.hp;
}

/**
 * функция возвращает .life определенного игрока
 * @returns {Element}
 */
export function elHP() {
    const $playerLife = document.querySelector(".player" + this.player + " .life");
    return $playerLife;
}

/**
 * функция жизни определенного игрока или игроков. Долго не мог понять почему не работает следующее вырожение this.elHP.style.width = this.hp + "%";
 * @returns {string}
 */
export function renderHP() {
    // console.log(this.elHP);
    // this.elHP.style.width = this.hp + "%"; // не работает
    this.elHP().style.width = this.hp + "%";
    return this.elHP();
}

