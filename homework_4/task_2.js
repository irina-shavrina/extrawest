'use strict';

require('dotenv').config()

export const usersWithCompletedTodos = () =>{
  const usersUrl = process.env.USERS_URL;
  const todosUrl = process.env.TODOS_URL;
  const urls =[usersUrl, todosUrl];
  
  return Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    .then(data => data[0].map(user => ({
      id: user.id, 
      username: user.username,
      todos: data[1].filter(todo => todo.userId === user.id && todo.completed),
    })));
};
