import {reverseWords} from './task_5';

describe('reverseWords', () => {
    test('should return "elbuod  secaps" from string "double  spaces"',
        () => {
            const result = reverseWords('double  spaces')  
            expect(result).toBe('elbuod  secaps')
        }
    );
    test('should return "ehT kciuq nworb xof spmuj revo eht yzal .god" from string "The quick brown fox jumps over the lazy dog."',
        () => {
            const result = reverseWords('The quick brown fox jumps over the lazy dog.') 	 
            expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
        }
    );
});
