import {reverseWords} from './task_5';

describe('reverseWords', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = reverseWords('double  spaces')  
            expect(result1).toBe('elbuod  secaps')
        }
    );
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = reverseWords('The quick brown fox jumps over the lazy dog.') 	 
            expect(result1).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
        }
    );
});
