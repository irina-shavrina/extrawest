'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  
  for(let item of data){
    console.log(item);
    const firstBranchElem = document.createElement('ul');
    firstBranchElem.classList.add('main-product');
    firstBranchElem.textContent = item;
    element.appendChild(firstBranchElem);

    for(let element of item){
      const secondBranchElem = document.createElement('li');
      secondBranchElem.classList.add('second-product');
      secondBranchElem.textContent = element;
      firstBranchElem.appendChild(secondBranchElem);
      for(let i of element){
        const thirdBranchElem = document.createElement('li');
        thirdBranchElem.classList.add('third-product');
        thirdBranchElem.textContent = i;
        secondBranchElem.appendChild(thirdBranchElem);
      }
    }
  }
}

createTree(tree, food);
