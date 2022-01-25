import {getOperands} from './task_4';

describe('getOperands', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = getOperands('1 + 2') 
            expect(result1).toBe('a:1, b:2')
        }
    );
});
describe('getOperands', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result2 = getOperands('1.2 * -3.4') 
            expect(result2).toBe('a:1.2, b:-3.4')
        }
    );
});
describe('getOperands', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result3 = getOperands('1 - 2')  
            expect(result3).toBe('a:1, b:2')
        }
    );
});
describe('getOperands', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result4 = getOperands('1 - -2') 	
            expect(result4).toBe('a:1, b:-2')
        }
    );
});