import {getAllProducts} from './task_1';

global.fetch = jest.fn(() =>
  Promise.resolve(
    {
      json: () => Promise.resolve(),
    }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('getAllProducts', () => {
  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{category: 'b'}, {category: 'a'}]),
    }));
  });

  test('getAllProducts', async() => {
    const result = await getAllProducts();

    expect(result).toEqual([{category: 'b'}, {category: 'a'}]);
  });

  test('fetch should be called once with https://fakestoreapi.com/products', async() =>{
    await getAllProducts();

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products',
    );
  });
});

describe('getUsersWithPosts', () =>{
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
});