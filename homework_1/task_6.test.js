import {isPalindrome} from './task_6';

describe('isPalindrome', function(){
    test('should return true from phrase "Eva, can I see bees in a cave?"',
        function(){
            const result = isPalindrome('Eva, can I see bees in a cave?')	
            expect(result).toBe(true)
        }
    );
    test('should return false from phrase "race a car"',
        function(){
            const result = isPalindrome('race a car')
            expect(result).toBe(false)
        }
    );
    test('should return true from phrase "Was it a cat I saw?"',
        function(){
            const result = isPalindrome('Was it a cat I saw?') 
            expect(result).toBe(true)
        }
    );
    test('should return true from string ""',
        function(){
            const result = isPalindrome('') 
            expect(result).toBe(true)
        }
    );
    test('should return false from nothing',
        function(){
            const result = isPalindrome() 
            expect(result).toBe(false)
        }
    );
    test('should return false from number',
    function(){
        const result = isPalindrome(12345678) 
        expect(result).toBe(false)
    }
    );
    test('should return true from string "1221"',
    function(){
        const result = isPalindrome('1221') 
        expect(result).toBe(true)
    }
    );
});
