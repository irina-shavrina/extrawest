import {createUrl} from './task_6';

describe('createUrl', function(){
    test('should return "/api/0" from "/api/{id}" with {id: 0}',
        function(){
            const result = createUrl('/api/{id}', {id: 0}) 	 
            expect(result).toBe('/api/0')
        }
    );
    test('should return "/api/undefined" from "/api/{id}" with {name: "Petya"}',
        function(){
            const result = createUrl('/api/{id}', {name: 'Petya'}) 	 
            expect(result).toBe('/api/undefined')
        }
    );
    test('should return "/api/items/0" from "/api/{list}/{id}" with {list: "items", id: 0}',
        function(){
            const result = createUrl('/api/{list}/{id}', {list: 'items', id: 0})  	 
            expect(result).toBe('/api/items/0')
        }
    );
});
