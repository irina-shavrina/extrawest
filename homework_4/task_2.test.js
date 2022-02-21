import {usersWithCompletedTodos} from './task_2';

global.fetch = jest.fn(() =>
  Promise.resolve(
    {
      json: () => Promise.resolve(),
    }),
);

beforeEach(() => {
  fetch.mockClear();
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
  
  const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": "delectus aut autem",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "delectus aut autem",
        "completed": true
    },
  ];
  

describe('usersWithCompletedTodos', () => {
  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(users),
    })),
    fetch.mockImplementationOnce(() => Promise.resolve({
        json: () => Promise.resolve(todos),
      }));
  });

  test('usersWithCompletedTodos', async() => {
    const result = await usersWithCompletedTodos();
    expect(result).toEqual([{"id": 1,
        "todos": [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": true
            },
            {
                "userId": 1,
                "id": 2,
                "title": "delectus aut autem",
                "completed": true
            },
            {
                "userId": 1,
                "id": 3,
                "title": "delectus aut autem",
                "completed": true
            },
        ],
        "username": "Bret"
    }]);
  });

  test('fetch should be called once with https://fakestoreapi.com/products', async() =>{
    await usersWithCompletedTodos();

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });
});
