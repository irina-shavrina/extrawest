import {alphabetPosition} from './task_10';

describe('alphabetPosition', function(){
    test('should return numbers 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11 from string "The sunset sets at twelve o`clock."',
        function(){
            const result = alphabetPosition("The sunset sets at twelve o' clock.") 	
            expect(result).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
        }
    );
    test('should return "" from string ""',
        function(){
            const result = alphabetPosition('')
            expect(result).toBe("")
        }
    );
    test('should return "" from nothing',
        function(){
            const result = alphabetPosition()
            expect(result).toBe("")
        }
    );
    test('should return numbers 1 2 3 from string "a b c 5"',
        function(){
            const result = alphabetPosition('a b c 5')
            expect(result).toBe("1 2 3")
        }
    );
    test('should return "" from string "111"',
        function(){
            const result = alphabetPosition('111')
            expect(result).toBe("")
        }
    );
});