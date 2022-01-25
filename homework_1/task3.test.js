import {createPhoneNumber} from './task_3';

describe('createPhoneNumber', function(){
    test('should return phone number (123) 456-7890',
        function(){
            const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
            expect(result).toBe("(123) 456-7890")
        }
    );
});
describe('createPhoneNumber', function(){
    test('should return phone number (123) 456-7890',
        function(){
            const result = createPhoneNumber([0, 8, 3, 1, 5, 4, 7, 8, 5, 0])
            expect(result).toBe("(083) 154-7850")
        }
    );
});
describe('createPhoneNumber', function(){
    test('should return phone number (123) 456-7890',
        function(){
            const result = createPhoneNumber([0, 6, 6, 3, 3, 9, 4, 4, 9, 6])
            expect(result).toBe("(066) 339-4496")
        }
    );
});