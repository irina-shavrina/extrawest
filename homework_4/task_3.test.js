import axios from 'axios';
jest.mock('axios');
import {getUsersWithPosts} from './task_3';

beforeEach(() =>{ 
  axios.mockClear();
});

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
];

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
];

const comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
];
const getUsersWithPostsResult = 
  [
    {
      "address":  {
        "city": "Gwenborough",
        "geo":  {
          "lat": "-37.3159",
          "lng": "81.1496",
        },
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "zipcode": "92998-3874",
      },
      "company":  {
        "bs": "harness real-time e-markets",
        "catchPhrase": "Multi-layered client-server neural-net",
        "name": "Romaguera-Crona",
      },
      "email": "Sincere@april.biz",
      "id": 1,
      "name": "Leanne Graham",
      "phone": "1-770-736-8031 x56442",
      "posts":  [
        {
          "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "userId": 1,
          "comments":  [
            {
              "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
                 "email": "Eliseo@gardner.biz",
                 "id": 1,
                 "name": "id labore ex et quam laborum",
              "postId": 1,
            },
          ],
        },
      ],
      "username": "Bret",
      "website": "hildegard.org",
    },
  ]
test('getUsersWithPosts', async() => {

  axios.mockImplementationOnce(() => Promise.resolve({ data: users }));
  axios.mockImplementationOnce(() => Promise.resolve({ data: posts }));
  axios.mockImplementationOnce(() => Promise.resolve({ data: comments }));

  const result = await getUsersWithPosts();
  expect(result).toEqual(getUsersWithPostsResult);
});

test('axios should be called 3 times', async() => {
  
  axios.mockImplementationOnce(() => Promise.resolve({ data: users }));
  axios.mockImplementationOnce(() => Promise.resolve({ data: posts }));
  axios.mockImplementationOnce(() => Promise.resolve({ data: comments }));

  await getUsersWithPosts();

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




