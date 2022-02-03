import {isPrime} from './task_3';

describe('isPrime', () => {
    test('should return true from number 2',
        () => {
            const result = isPrime(2) 
            expect(result).toBe(true)
        }
    );
    test('should return true from number 73',
        () => {
            const result = isPrime(73)
            expect(result).toBe(true)
        }
    );
    test('should return false from number 1',
        () => {
            const result = isPrime(1)
            expect(result).toBe(false)
        }
    );
    test('should return false from number 75',
        () => {
            const result = isPrime(75)
            expect(result).toBe(false)
        }
    );
    test('should return false from number -1',
        () => {
            const result = isPrime(-1)
            expect(result).toBe(false)
        }
    );
});
