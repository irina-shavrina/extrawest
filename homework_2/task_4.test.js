import {moveZeros} from './task_4';

describe('moveZeros', function(){
    test('should return [false,1,1,2,1,3,"a",0,0] from [false,1,0,1,2,0,1,3,"a"]',
        function(){
            const result = moveZeros([false,1,0,1,2,0,1,3,"a"])  
            expect(result).toStrictEqual([false,1,1,2,1,3,"a",0,0])
        }
    );
});
