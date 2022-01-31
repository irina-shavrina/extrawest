import {calculateRentalCost} from './task_1';

describe('calculateRentalCost', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = calculateRentalCost(2) 
            expect(result1).toBe(80)
        }
    );
    test('should return -3 when subtract 15 and 18',
        function(){
            const result1 = calculateRentalCost(3)
            expect(result1).toBe(100)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = calculateRentalCost(7)
            expect(result1).toBe(230)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = calculateRentalCost("qwerty")
            expect(result1).toBe(0)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = calculateRentalCost()
            expect(result1).toBe(0)
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = calculateRentalCost("")
            expect(result1).toBe(0)
        }
    );
});
