import {calculateRentalCost} from './task_1';

describe('calculateRentalCost', function(){
    test('should return 80$ for 2 days rent',
        function(){
            const result = calculateRentalCost(2) 
            expect(result).toBe(80)
        }
    );
    test('should return 100$ for 3 days rent',
        function(){
            const result = calculateRentalCost(3)
            expect(result).toBe(100)
        }
    );
    test('should return 230$ for 7 days rent',
        function(){
            const result = calculateRentalCost(7)
            expect(result).toBe(230)
        }
    );
    test('should return 0 from string "qwerty"',
        function(){
            const result = calculateRentalCost("qwerty")
            expect(result).toBe(0)
        }
    );
    test('should return 0 from nothing',
        function(){
            const result = calculateRentalCost()
            expect(result).toBe(0)
        }
    );
    test('should return 0 from string ""',
        function(){
            const result = calculateRentalCost("")
            expect(result).toBe(0)
        }
    );
});
