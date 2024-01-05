const $root = document.querySelector('.arenas');
const $randomButam = document.querySelector('.button');
const $formFigth = document.querySelector('.control');


const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Scortion',
    hp: 105,
    img: 'assets/scorpion.gif',
    weapon: ['pika'],
    attack,
    changeHP,
}


const player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'assets/subzero.gif',
    weapon: ['tapor'],
    attack,
    changeHP,
}

/**
 *
 */
function attack() {
    console.log(this);
    console.log(+'' + 'Figth ...');
}

/**
 *
 * @param name
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
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

/**
 * фукция изминения ХП игрока
 * @param player
 */
function changeHP(damage) {
    // console.log(player);

    const $playerLife = document.querySelector('.player' + this.player + ' .life');
    this.hp -= Math.ceil(Math.random() * 10);
    $playerLife.style.width = this.hp + '%';

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {

}

function renderHP() {

}

/**
 * фукция случайных чисел,
 * @param params
 * @returns {number}
 */
function getRendom (params){
    const rendom = Math.ceil(Math.random() * params);
    return rendom;
}

function createReloadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click', function () {
        window.location.reload();
    })

    $reloadButtonDiv.appendChild($reloadButton);
    $root.appendChild($reloadButtonDiv);
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

/**
 *
 */
$randomButam.addEventListener('click', function () {

    changeHP(player1);
    changeHP(player2);
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButam.disabled = true;
        createReloadButton();
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $root.appendChild(playerWin(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $root.appendChild(playerWin(player1.name));
    } else if (player1.hp === 0 && player2.ph === 0) {
        $root.appendChild(playerWin());
    }
});
function ememyAttack(){
    const hit = ATTACK[getRendom(3)-1];
    const defence = ATTACK[getRendom(3)-1];

    return {
        value: getRendom(HIT[hit]),
        hit,
        defence,
    }
}

$formFigth.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = ememyAttack();

    const attack = {};

    for (let item of $formFigth){

        if (item.checked && item.name === 'hit'){
            attack.value = getRendom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence'){
            attack.defence = item.value;
        }
        item.checked = false;
    }

    console.log('###:attack', attack);
    console.log('###: enemy', enemy);
});



$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));





