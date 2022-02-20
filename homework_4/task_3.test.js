import axios from 'axios';
jest.mock('axios');
import {getUsersWihPosts} from './task_3';

beforeEach(() =>{ 
  axios.mockClear();
});

const users = [
  {
    id: 1, name: 'John',
  },
];

const posts = [
  {
    userId: 1, title: 'Test post', id: 1,
  },
];

const comments = [
  {
    postId: 1, body: 'Comment post', id: 1,
  },
];

test('axios should be called 3 times', async() => {
  
  axios.mockImplementtationOnce(() => Promise.resolve({ data: users }));
  axios.mockImplementtationOnce(() => Promise.resolve({ data: posts }));
  axios.mockImplementtationOnce(() => Promise.resolve({ data: comments }));

  await getUsersWihPosts();

  expect(axios).toHaveBeenCalledTimes(3);

  expect(axios).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users',
  );

  expect(axios).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
  );

  expect(axios).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/comments',
  );
});