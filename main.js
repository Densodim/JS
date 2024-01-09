const $arenas = document.querySelector(".arenas");
const $submitButton = document.querySelector(".button");
const $formFight = document.querySelector(".control");
const $chat = document.querySelector('.chat');

const logs = {
    start:
        "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
    end: [
        "Результат удара [playerWins]: [playerLose] - труп",
        "[playerLose] погиб от удара бойца [playerWins]",
        "Результат боя: [playerLose] - жертва, [playerWins] - убийца",
    ],
    hit: [
        "[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.",
        "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.",
        "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.",
        "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.",
        "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.",
        "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.",
        "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.",
        "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.",
        "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.",
        "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.",
        "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.",
        "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.",
        "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.",
        "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.",
        "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.",
        "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.",
        "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.",
        "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.",
    ],
    defence: [
        "[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.",
        "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.",
        "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.",
        "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.",
        "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.",
        "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
        "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.",
        "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
    ],
    draw: "Ничья - это тоже победа!",
};

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


const players = [player1, player2];

/**
 * функция создания HTMLElement
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement }
 */
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
function getRandom(damage) {
    // console.log(damage);
    const randomNum = Math.ceil(Math.random() * damage);
    return randomNum;
}

/**
 * функция изминения HP
 * @param {number} player
 * @returns {number|*}
 */
function changeHP(player) {
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
function elHP() {
    const $playerLife = document.querySelector(".player" + this.player + " .life");
    return $playerLife;
}

/**
 * функция жизни определенного игрока или игроков. Долго не мог понять почему не работает следующее вырожение this.elHP.style.width = this.hp + "%";
 * @returns {string}
 */
function renderHP() {
    // console.log(this.elHP);
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
        generateLogs('end', player1, player2);
    } else {
        $resultTitle.innerText = "draw!";
        generateLogs('draw');
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
    // console.log($reloadButton);
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

/**
 * функция атаки игрока
 * @returns {number}
 */
function playerAttak() {
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
    return attack;
}

/**
 * функция генирации лога, `<p>${text}</p>` - вариант использования шаблонноных строк, insertAdjacentHTML('afterbegin', el) - метод добовляет текст в зависимости от выбранной позиции
 * @param {string} type
 * @param {Object.<string, number>} player1
 * @param {Object.<string, number>} player2
 */
function generateLogs(type, player1, player2) {
    const time = new Date().toLocaleTimeString();
    let text = '';

    switch (type) {
        case 'hit':
            text = `${time} - ${logs[type][getRandom(logs.hit.length)]
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name)} ${player2.hp - 100}[${
                player2.hp}/100]`;
            break;
        case 'defence':
            text = `${time} - ${logs[type][getRandom(logs.hit.length)]
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name)} ${player2.hp - 100}[${
                player2.hp}/100]`;
            break;
        case 'draw':
            text = logs["draw"];
            break;
        case 'end':
            text = `${time} - ${logs[type][getRandom(logs.end.length)]
                .replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name)}`
            break;
        default:
            text = logs[type].replace('time', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
    }
    const el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
}

generateLogs('start', player1, player2);

/**
 * функция проверки какой игрок победил, $submitButton.disabled = true; - отключает кнопку figth. и создает кнопку перезагрузки
 * @returns {Element}
 */
function showResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        $submitButton.disabled = true;

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
}

$formFight.addEventListener("submit", function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttak();


    if (player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1);
    }
    if (enemy.defence !== player.hit) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('defence', player1, player2);
    }

    // const chosenPlayer = choosePlayer();
    // chosenPlayer.changeHP(getRandom(attack.value));
    // chosenPlayer.renderHP();
    // console.log(chosenPlayer);
    showResult();
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
