'use strict';
const showCategories = () =>{
    const header = document.getElementsByClassName('item');
    for(let item of header){
        item.addEventListener('click', () => {
            for(let element of item.children){
                if(element.hidden === false){
                    element.hidden = true;
                }
                else{
                    element.hidden = false;
                }
            }
        })
    }
}
showCategories();
