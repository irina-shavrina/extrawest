import {fearNotLetter} from './task_16';

describe('fearNotLetter', function(){
    test('should return  from ',
        function(){
            const result = fearNotLetter("abce") 	 	 
            expect(result).toBe('d')
        }
    );
    test('should return  from ',
        function(){
            const result = fearNotLetter('abcdefghjklmno')  	 
            expect(result).toBe('i')
        }
    );
    test('should return  from ',
        function(){
            const result = fearNotLetter('stvwx') 	
            expect(result).toBe('u')
        }
    );
});
