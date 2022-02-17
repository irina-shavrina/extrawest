import axios from './node_modules/axios';

export const usersWithCompletedTodos = () =>{
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  
  const promise1 = axios.get(usersUrl);
  const promise2 = axios.get(postsUrl);
  const promise3 = axios.get(commentsUrl);

  Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
  });
};

usersWithCompletedTodos();