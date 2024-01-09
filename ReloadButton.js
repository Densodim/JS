import {$arenas} from './utils.js';

/**
 * функция создания кнопки reload
 * @returns {HTMLButtonElement}
 */
export const createReloadButton = () => {
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