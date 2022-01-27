import {countOccurrences} from './task_8';

describe('countOccurrences', function(){
    test('should return 2 from string "ability" with "i"',
        function(){
            const result = countOccurrences('ability', "i")	
            expect(result).toBe(2)
        }
    );
    test('should return 1 from string "abc" with "a"',
        function(){
            const result = countOccurrences('abc', 'a') 
            expect(result).toBe(1)
        }
    );
    test('should return 1 from string "ABC" with "a"',
        function(){
            const result = countOccurrences('ABC', 'a')
            expect(result).toBe(1)
        }
    );
    test('should return 0 from string "ability"',
        function(){
            const result = countOccurrences('ability')
            expect(result).toBe(0)
        }
    );
    test('should return 0 from nothing',
        function(){
            const result = countOccurrences()
            expect(result).toBe(0)
        }
    );
    test('should return 0 from string "ABC" and 3',
        function(){
            const result = countOccurrences('ABC', 3)
            expect(result).toBe(0)
        }
    );
    test('should return 0 from number 12345 and string "qwerty"',
        function(){
            const result = countOccurrences(12345, 'qwerty')
            expect(result).toBe(0)
        }
    );
    test('should return 0 from string ""',
        function(){
            const result = countOccurrences('')
            expect(result).toBe(0)
        }
    );
});