import { changeHP, elHP, renderHP } from './HPplayers.js';

export const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 50,
    img: "assets/scorpion.gif",
    weapon: ["pika"],
    attack() {
        console.log(this.name + " " + "Fight...");
    },
    changeHP,
    elHP,
    renderHP,
};

export const player2 = {
    player: 2,
    name: "SAB-ZERO",
    hp: 50,
    img: "assets/subzero.gif",
    weapon: ["tapor"],
    attack() {
        console.log(this.name + " " + "Fight...");
    },
    changeHP,
    elHP,
    renderHP,
};