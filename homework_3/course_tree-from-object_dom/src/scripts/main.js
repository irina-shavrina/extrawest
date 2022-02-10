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
  for(const item in data){
    const container = createUl();

    container.appendChild(createLi(item))
    element.appendChild(container);
    
    if(data[item])
      createTree(container, data[item])
  }
}
function createUl(){
  const result = document.createElement('ul');

  return result;
}
function createLi(textContent){
  const result = document.createElement('li');
  result.textContent = textContent;

  return result;
}

createTree(tree, food);
