import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {usersWithCompletedTodos} from './task_3';

describe('usersWithCompletedTodos', () => {
  it('returns data when sendMessage is called', done => {
    const mock = new MockAdapter(axios);
    const userData = [{
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496',
        },
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets',
      },
    }];
    const postData = [{
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }];
    const commentData = [  {
      'postId': 1,
      'id': 1,
      'name': 'id labore ex et quam laborum',
      'email': 'Eliseo@gardner.biz',
      'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    }];
    const expect = [  {
      'id': 1,
      'username': 'Bret',
      'posts': [
        {
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'comments': [
            {
              'postId': 1,
              'id': 1,
              'name': 'id labore ex et quam laborum',
              'email': 'Eliseo@gardner.biz',
              'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',    
            },
          ],
        },
      ],
    }];

    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, userData);
    mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, postData);
    mock.onGet('https://jsonplaceholder.typicode.com/comments').reply(200, commentData);

    usersWithCompletedTodos().then(response => {
      expect(response).toEqual(expect);
      done();
    });
  });
});