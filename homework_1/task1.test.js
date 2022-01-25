import {basikOp} from './task_1';

describe('basikOp', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = basikOp('+', 4, 7)
            expect(result1).toBe(11)
        }
    );
});
describe('basikOp', function(){
    test('should return -3 when subtract 15 and 18',
        function(){
            const result1 = basikOp('-', 15, 18)
            expect(result1).toBe(-3)
        }
    );
});
describe('basikOp', function(){
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = basikOp('*', 5, 5)
            expect(result1).toBe(25)
        }
    );
});
describe('basikOp', function(){
    test('should return 7 when divide 49 and 7',
        function(){
            const result1 = basikOp('/', 49, 7)
            expect(result1).toBe(7)
        }
    );
});
describe('basikOp', function(){
    test('should return 0 in an unidentified operation',
        function(){
            const result1 = basikOp('something else', 45, 45)
            expect(result1).toBe(0)
        }
    );
});