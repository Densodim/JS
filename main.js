const $root = document.querySelector('.arenas');
const $randomButam = document.querySelector('.button');
const player1 = {
    player: 1,
    name: 'Scortion',
    hp: 100,
    img: 'assets/scorpion.gif',
    weapon: ['pika'],
    attack: function () {
        console.log(name + 'Figth ...')
    }
}

const player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'assets/subzero.gif',
    weapon: ['tapor'],
    attack: function () {
        console.log(name + 'Figth ...')
    }
}

function playerLose (name){
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' Lose!!';

    return $loseTitle;
}

function playerWin (name){
 const $wineTitle = createElement('div', 'loseTitle');
 $wineTitle.innerText = name + 'Win!!';

 return $wineTitle;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+player.player+' .life');
    player.hp -= Math.ceil(Math.random() * 10);
    console.log(player.hp);
    $playerLife.style.width = player.hp + '%';
    console.log(player);
    if (player.hp < 0){
        $root.appendChild(playerWin(player.name));
        if (player.player != player.player ){
            $root.appendChild(playerWin(player.name));
        }
    }
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
});

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));





