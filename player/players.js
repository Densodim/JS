

class Player {
    constructor (props){
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`; 
    }
/**
 * функция изминения HP
 * @param {number} player
 * @returns {number|*}
 */
 changeHP = (player) => {

    // console.log(player);
    
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
 elHP = () => {
    const $playerLife = document.querySelector(`.${this.selector} .life`);
    return $playerLife;
}

/**
 * функция жизни определенного игрока или игроков. Долго не мог понять почему не работает следующее вырожение this.elHP.style.width = this.hp + "%";
 * @returns {string}
 */
  renderHP = () => {
    // console.log(this.elHP);
    // this.elHP.style.width = this.hp + "%"; // не работает
    this.elHP().style.width = this.hp + "%";
    return this.elHP();
}

}



    


export default Player;


export const player1 = new Player({
    player: 1,
    name: "Scorpion",
    hp: 50,
    img: "assets/scorpion.gif",
    
});


export const player2 = new Player({
    player: 2,
    name: "SAB-ZERO",
    hp: 50,
    img: "assets/subzero.gif",
});





