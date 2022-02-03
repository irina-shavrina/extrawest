import {fearNotLetter} from './task_16';

describe('fearNotLetter', () => {
    test('should return "d" from "abce"',
        () => {
            const result = fearNotLetter("abce") 	 	 
            expect(result).toBe('d')
        }
    );
    test('should return "i" from "abcdefghjklmno"',
        () => {
            const result = fearNotLetter('abcdefghjklmno')  	 
            expect(result).toBe('i')
        }
    );
    test('should return "u" from "stvwx"',
        () => {
            const result = fearNotLetter('stvwx') 	
            expect(result).toBe('u')
        }
    );
    test('should return undefined from "abcdefghijklmnopqrstuvwxyz"',
        () => {
            const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz') 	
            expect(result).toBe(undefined)
        }
    );
});
