import {getTime} from './task_5';

describe('getTime', function(){
    test('should return 09:00 from sentence Breakfast at 09:00',
        function(){
            const result1 = getTime('Breakfast at 09:00') 	
            expect(result1).toBe('09:00')
        }
    );
    test('should return 21:00 from sentence Breakfast at 09:60, Dinner at 21:00',
        function(){
            const result2 = getTime('Breakfast at 09:60, Dinner at 21:00')
            expect(result2).toBe('21:00')
        }
    );
    test('should return 09:59 from sentence Breakfast at 09:59, Dinner at 21:00',
        function(){
            const result3 = getTime('Breakfast at 09:59, Dinner at 21:00') 
            expect(result3).toBe('09:59')
        }
    );
    test('should return " " from sentence Breakfast at 0, Dinner at 21:61',
    function(){
        const result4 = getTime('Breakfast at 0, Dinner at 21:61') 
        expect(result4).toBe('')
    }
);
});
