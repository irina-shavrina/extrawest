import {createUrl} from './task_6';

describe('createUrl', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = createUrl('/api/{id}', {id: 0}) 	 
            expect(result1).toBe('/api/0')
        }
    );
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = createUrl('/api/{id}', {name: 'Petya'}) 	 
            expect(result1).toBe('/api/undefined')
        }
    );
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = createUrl('/api/{list}/{id}', {list: 'items', id: 0})  	 
            expect(result1).toBe('/api/items/0')
        }
    );
});
