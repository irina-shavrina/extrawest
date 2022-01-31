import {moveZeros} from './task_4';

describe('moveZeros', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = moveZeros([false,1,0,1,2,0,1,3,"a"])  
            expect(result1).toStrictEqual([false,1,1,2,1,3,"a",0,0])
        }
    );
});
