import {createPhoneNumber} from './task_3';

describe('createPhoneNumber', function(){
    test('should return phone number (123) 456-7890',
        function(){
            const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
            expect(result).toBe("(123) 456-7890")
        }
    );
});