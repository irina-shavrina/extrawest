import {isPalindrome} from './task_6';

describe('getTime', function(){
    test('should return true from phrase "Eva, can I see bees in a cave?"',
        function(){
            const result1 = isPalindrome('Eva, can I see bees in a cave?')	
            expect(result1).toBe(true)
        }
    );
    test('should return false from phrase "race a car"',
        function(){
            const result2 = isPalindrome('race a car')
            expect(result2).toBe(false)
        }
    );
    test('should return true from phrase "Was it a cat I saw?"',
        function(){
            const result3 = isPalindrome('Was it a cat I saw?') 
            expect(result3).toBe(true)
        }
    );
});
