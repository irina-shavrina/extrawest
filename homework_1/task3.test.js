import {createPhoneNumber} from './task_3';

describe('createPhoneNumber', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
            expect(result).toBe("(123) 456-7890")
        }
    );
});