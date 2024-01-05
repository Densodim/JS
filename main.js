const $root = document.querySelector('.arenas');
const $randomButam = document.querySelector('.button');


var player1 = {
    player: 1,
    name: 'Scortion',
    hp: 105,
    img: 'assets/scorpion.gif',
    weapon: ['pika'],
    attack,
    changeHP,
}


var player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'assets/subzero.gif',
    weapon: ['tapor'],
    attack,
    changeHP,
}

function attack () {
    console.log(this);
    console.log( + '' + 'Figth ...');
}


function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' Lose!!';

    return $loseTitle;
}

function playerWin(name) {
    const $wineTitle = createElement('div', 'loseTitle');

    if (name) {
        $wineTitle.innerText = name + 'Win!!';
    } else {
        $wineTitle.innerText = name + 'drow!';
    }
    return $wineTitle;
}



function changeHP(player) {
    // console.log(player);


    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 10);
    $playerLife.style.width = player.hp + '%';
    if (player.hp <= 0) {
        player.hp = 0;
    }
}

function elHP (){

}

function renderHP (){

}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player1 = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $progressbarLife = createElement('div', 'life');
    const $progressbarName = createElement('div', playerObj.name);
    const $characterImg = createElement('img');

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($progressbarName);
    $progressbar.appendChild($progressbarLife);

    $progressbarLife.style.width = playerObj.hp + '%';
    $progressbarName.innerText = playerObj.name;

    $characterImg.src = playerObj.img;
    $character.appendChild($characterImg);

    return $player1;
}


$randomButam.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButam.disabled = true;
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $root.appendChild(playerWin(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $root.appendChild(playerWin(player1.name));
    } else if (player1.hp === 0 && player2.ph === 0) {
        $root.appendChild(playerWin());
    }
});

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));





