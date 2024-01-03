const player1 = {

    name: 'Pety',
    hp: 200,
    img: 'img',
    weapon: ['pika'],
    attack: function () {
        console.log(name + 'Figth ...')
    }
}

const player2 = {
    name: 'Ivan',
    hp: 200,
    img: 'img',
    weapon: ['tapor'],
    attack: function () {
        console.log(name + 'Figth ...')
    }
}

function createPlayer(clas, name, hp){
    const $player1 = document.createElement('div');
    $player1.classList.add(clas);
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $progressbarLife = document.createElement('div');
    const $progressbarName = document.createElement('div');
    $progressbarLife.classList.add('life');
    $progressbarLife.innerText = hp;
    $progressbarName.classList.add('name');
    $progressbarName.innerText = name;
    $progressbar.appendChild($progressbarName);
    $progressbar.appendChild($progressbarLife);

    const $characterImg = document.createElement('img');
    $characterImg.src = 'assets/scorpion.gif';
    $character.appendChild($characterImg);
    const $root = document.querySelector('.arenas');
    $root.appendChild($player1);


}


player1.name = 'Scortion';
player2.name = 'SUB-ZERO';
console.log(player2);
createPlayer('player1', 'Scortion', 60);
createPlayer('player2', 'SUB-ZERO', 80);




