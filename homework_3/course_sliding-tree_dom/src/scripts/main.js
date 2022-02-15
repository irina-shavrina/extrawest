'use strict';
const showCategories = () => {
    const main = document.querySelector('.tree');

    main.addEventListener('click', (event) => {
        const item = event.target;
        if(item.tagName === "LI"){
            if(item.children.length > 0) {
                item.children[0].hidden = !item.children[0].hidden
            }
        }
})
}
showCategories();
