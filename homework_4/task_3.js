import axios from 'axios';

export const getUsersWihPosts = async() =>{
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  
  const userData = await axios(usersUrl);
  const postsData = await axios(postsUrl);
  const commentsData = await axios(commentsUrl);
  console.log(userData);

  const users = userData.data;
  const posts = postsData.data;
  const comments = commentsData.data;

  try {
    return values => 
    users.data.map(user => ({
      id: user.id, 
      username: user.username,
      posts: getAllUserPosts(user.id, posts.data).map(post => ({
        id: post.id,
        title: post.title,
        comments: getAllPostCommentPosts(post.id, comments.data),
      })),
    }))
  }
  catch{
    console.log("error");
  }
}

const getAllUserPosts = (userId, posts) => posts.filter(post => post.userId === userId);
const getAllPostCommentPosts = (postId, comments) => comments.filter(comment => comment.postId === postId);

console.log(getUsersWihPosts);
