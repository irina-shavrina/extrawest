'use strict';

const usersWithCompletedTodos = () =>{
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  const urls =[usersUrl, todosUrl];
  
  return Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    .then(data => data[0].map(user => ({
      id: user.id, 
      username: user.username,
      todos: data[1].filter(todo => todo.userId === user.id && todo.completed),
    })));
};

usersWithCompletedTodos().then(console.log);