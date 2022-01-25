import {getTime} from './task_5';

describe('getTime', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = getTime('Breakfast at 09:00') 	
            expect(result1).toBe('09:00')
        }
    );
});
describe('getTime', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result2 = getTime('Breakfast at 09:60, Dinner at 21:00')
            expect(result2).toBe('21:00')
        }
    );
});
describe('getTime', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result3 = getTime('Breakfast at 09:59, Dinner at 21:00') 
            expect(result3).toBe('09:59')
        }
    );
});