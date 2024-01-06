const $arenas = document.querySelector(".arenas");
const $submitButton = document.querySelector(".button");
const $formFight = document.querySelector(".control");

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ["head", "body", "foot"];

const player1 = {
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

const player2 = {
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

// массив участвующих в игре
const players = [player1, player2];

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

/**
 * фунция создания игрока (в returns почему-то подтягивает все возможные элементы
 * @param {string} player
 * @returns { HTMLElement }
 */
function createPlayer(player) {
    const $player = createElement("div", "player" + player.player);
    const $progressbar = createElement("div", "progressbar");
    const $character = createElement("div", "character");
    const $life = createElement("div", "life");
    $life.style.width = player.hp + "%";

    const $name = createElement("div", "name");
    $name.innerHTML = player.name;

    const $img = createElement("img");
    $img.src = player.img;

    $player.append($progressbar, $character);
    $progressbar.append($life, $name);
    $character.append($img);

    return $player;
}

/**
 * функция рендомного числа
 * @param {number} num
 * @returns {number}
 */
function getRandom(num) {
    const randomNum = Math.ceil(Math.random() * num);
    return randomNum;
}

/**
 * функция изминения HP
 * @param {number} num
 * @returns {number|*}
 */
function changeHP(num) {
    this.hp -= num;
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
function elHP() {
    const $playerLife = document.querySelector(
        ".player" + this.player + " .life"
    );

    return $playerLife;
}

/**
 * функция отресовывывает жизни определенного игрока или игроков. Долго не мог понять почему не работает следующее вырожение this.elHP.style.width = this.hp + "%";
 * @returns {string}
 */
function renderHP() {
    // console.log(this.elHP());
    // this.elHP.style.width = this.hp + "%"; // не работает
    this.elHP().style.width = this.hp + "%";
    return this.elHP();
}

/**
 * функция выводит div элемент победивщего игрока
 * @param {string} name
 * @returns { HTMLElement}
 */
function playerWin(name) {
    const $resultTitle = createElement("div", "loseTitle");
    if (name) {
        $resultTitle.innerText = name + " win!!!";
    } else {
        $resultTitle.innerText = "draw!";
    }

    return $resultTitle;
}

/**
 * функция создания кнопки reload
 * @returns {HTMLButtonElement}
 */
function createReloadButton() {
    const $reloadWrap = document.createElement("div");
    const $reloadButton = document.createElement("button");
    $reloadWrap.classList.add("reloadWrap");
    $reloadButton.classList.add("button");
    $arenas.appendChild($reloadWrap);
    $reloadWrap.appendChild($reloadButton);
    $reloadButton.innerText = "Reload";
    console.log($reloadButton);
    return $reloadButton;
}

/**
 * функция случайного выбора игроков из массива участвующих
 * @returns {function}
 */
function choosePlayer() {
    const player = players[getRandom(2) - 1];
    return player;
}

/**
 * функция атаки пративника
 * @returns {{hit: string, defence: string, value: number}}
 */
function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    };
}

$formFight.addEventListener("submit", function (e) {
    e.preventDefault();
    const enemy = enemyAttack();

    const attack = {};
    for (let item of $formFight) {
        if (item.checked && item.name === "hit") {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === "defence") {
            attack.defence = item.value;
        }
        item.checked = false;
    }

    const chosenPlayer = choosePlayer();
    chosenPlayer.changeHP(getRandom(attack.value));
    chosenPlayer.renderHP();
    console.log(chosenPlayer);

    if (player1.hp === 0 || player2.hp === 0) {
        $submitButton.disabled = true;
        // $submitButton.innerHTML = "Game is over!";
        // $submitButton.style.backgroundColor = "grey";
        // $formFight.style.opacity = "0.5";

        createReloadButton().addEventListener("click", function () {
            window.location.reload();
        });
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name));
    } else if (player1.hp === 0 && player1.hp === player2.hp) {
        $arenas.appendChild(playerWin());
    }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
