import {getOperands} from './task_4';

describe('getOperands', function(){
    test('should return a:1, b:2 from operation 1 + 2',
        function(){
            const result1 = getOperands('1 + 2') 
            expect(result1).toBe('a:1, b:2')
        }
    );
    test('should return a:1.2, b:-3.4 from operation 1.2 * -3.4',
        function(){
            const result2 = getOperands('1.2 * -3.4') 
            expect(result2).toBe('a:1.2, b:-3.4')
        }
    );
    test('should return a:1, b:2 from operation 1 - 2',
        function(){
            const result3 = getOperands('1 - 2')  
            expect(result3).toBe('a:1, b:2')
        }
    );
    test('should return a:1, b:-2 from operation 1 - -2',
        function(){
            const result4 = getOperands('1 - -2') 	
            expect(result4).toBe('a:1, b:-2')
        }
    );
    test('should return 0 from operation 1.2 1 -3.',
        function(){
            const result4 = getOperands('1.2 1 -3.4') 	
            expect(result4).toBe(0)
        }
    );
});
