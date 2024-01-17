


/**
 * функция создания HTMLElement
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement }
 */
export function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}