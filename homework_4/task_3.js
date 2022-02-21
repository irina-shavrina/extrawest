import axios from 'axios';

export const getUsersWihPosts = async() =>{
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  
  const UserData = await axios(usersUrl);
  const PostsData = await axios(postsUrl);
  const CommentsData = await axios(commentsUrl);

  const users = UserData.data;
  const posts = PostsData.data;
  const comments = CommentsData.data;

  try {
    return values => 
    users.data.map(user => ({
      id: user.id, 
      username: user.username,
      posts: getAllUserPosts(user.id, posts.data).map(post => ({
        id: post.id,
        title: post.title,
        comments: getAllPostCommentPosts(post.id, values[2].data),
      })),
    }))
  }
  catch{
    console.log("error");
  }
}

const getAllUserPosts = (userId, posts) => posts.filter(post => post.userId === userId);
const getAllPostCommentPosts = (postId, comments) => comments.filter(comment => comment.postId === postId);