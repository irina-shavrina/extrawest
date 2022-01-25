import {basikOp} from './task_1';

describe('basikOp', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = basikOp('+', 4, 7)
            expect(result1).toBe(11)
        }
    );
});
describe('basikOp', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = basikOp('-', 15, 18)
            expect(result1).toBe(-3)
        }
    );
});
describe('basikOp', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = basikOp('*', 5, 5)
            expect(result1).toBe(25)
        }
    );
});
describe('basikOp', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = basikOp('/', 49, 7)
            expect(result1).toBe(7)
        }
    );
});
describe('basikOp', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = basikOp('something else', 45, 45)
            expect(result1).toBe(0)
        }
    );
});