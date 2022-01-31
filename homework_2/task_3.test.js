import {isPrime} from './task_3';

describe('isPrime', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = isPrime(2) 
            expect(result1).toBe(true)
        }
    );
    test('should return -3 when subtract 15 and 18',
        function(){
            const result1 = isPrime(73)
            expect(result1).toBe(true)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = isPrime(1)
            expect(result1).toBe(false)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = isPrime(75)
            expect(result1).toBe(false)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = isPrime(-1)
            expect(result1).toBe(false)
        }
    );
});
