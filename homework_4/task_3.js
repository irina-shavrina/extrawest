import axios from 'axios';
require('dotenv').config()
export const getUsersWithPosts = async() =>{
  const usersUrl = process.env.USERS_URL;
  const postsUrl = process.env.POSTS_URL;
  const commentsUrl = process.env.COMMENT_URL;
  
  const userData = await axios(usersUrl);
  const postsData = await axios(postsUrl);
  const commentsData = await axios(commentsUrl);


  const users = userData.data;
  const posts = postsData.data;
  const comments = commentsData.data;

  try{
    return users.map(user => ({
      ...user,
      posts: getAllUserPosts(user.id, posts).map(post => ({
        ...post,
        comments: getAllPostComments(post.id, comments),
      })),
    }))
  }
  catch{
    console.log("Error");
  }
}

const getAllUserPosts = (userId, posts) => posts.filter(post => post.userId === userId);
const getAllPostComments = (postId, comments) => comments.filter(comment => comment.postId === postId);
;
