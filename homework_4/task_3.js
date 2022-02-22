import axios from 'axios';

export const getUsersWithPosts = async() =>{
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  
  const userData = await axios(usersUrl);
  const postsData = await axios(postsUrl);
  const commentsData = await axios(commentsUrl);


  const users = userData.data;
  const posts = postsData.data;
  const comments = commentsData.data;

  return users.map(user => ({
    ...user,
    posts: getAllUserPosts(user.id, posts).map(post => ({
      ...post,
      comments: getAllPostComments(post.id, comments),
    })),
  }))

}

const getAllUserPosts = (userId, posts) => posts.filter(post => post.userId === userId);
const getAllPostComments = (postId, comments) => comments.filter(comment => comment.postId === postId);
;
