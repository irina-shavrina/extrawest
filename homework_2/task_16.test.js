import {fearNotLetter} from './task_16';

describe('fearNotLetter', () => {
    test('should return  from ',
        () => {
            const result = fearNotLetter("abce") 	 	 
            expect(result).toBe('d')
        }
    );
    test('should return  from ',
        () => {
            const result = fearNotLetter('abcdefghjklmno')  	 
            expect(result).toBe('i')
        }
    );
    test('should return  from ',
        () => {
            const result = fearNotLetter('stvwx') 	
            expect(result).toBe('u')
        }
    );
});
