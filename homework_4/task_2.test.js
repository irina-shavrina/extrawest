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
        "completed": false
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

    expect(result).toEqual([{id: 1,
        todos: {
        0: {userId: 1, id: 4, title: 'et porro tempora', completed: true},
        1: {userId: 1, id: 8, title: 'quo adipisci enim quam ut ab', completed: true},
        2: {userId: 1, id: 10, title: 'illo est ratione doloremque quia maiores aut', completed: true},
        3: {userId: 1, id: 11, title: 'vero rerum temporibus dolor', completed: true},
        4: {userId: 1, id: 12, title: 'ipsa repellendus fugit nisi', completed: true},
        5: {userId: 1, id: 14, title: 'repellendus sunt dolores architecto voluptatum', completed: true},
        6: {userId: 1, id: 15, title: 'ab voluptatum amet voluptas', completed: true},
        7: {userId: 1, id: 16, title: 'accusamus eos facilis sint et aut voluptatem', completed: true},
        8: {userId: 1, id: 17, title: 'quo laboriosam deleniti aut qui', completed: true},
        9: {userId: 1, id: 19, title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil', completed: true},
        10: {userId: 1, id: 20, title: 'ullam nobis libero sapiente ad optio sint', completed: true}
        },
        username: "Bret"
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
