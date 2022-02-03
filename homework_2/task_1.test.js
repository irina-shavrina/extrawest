import {calculateRentalCost} from './task_1';

describe('calculateRentalCost', () => {
    test('should return 80$ for 2 days rent',
        () => {
            const result = calculateRentalCost(2) 
            expect(result).toBe(80)
        }
    );
    test('should return 100$ for 3 days rent',
        () => {
            const result = calculateRentalCost(3)
            expect(result).toBe(100)
        }
    );
    test('should return 230$ for 7 days rent',
        () => {
            const result = calculateRentalCost(7)
            expect(result).toBe(230)
        }
    );
    test('should return 0 from string "qwerty"',
        () => {
            const result = calculateRentalCost("qwerty")
            expect(result).toBe(0)
        }
    );
    test('should return 0 from nothing',
        () => {
            const result = calculateRentalCost()
            expect(result).toBe(0)
        }
    );
    test('should return 0 from string ""',
        () => {
            const result = calculateRentalCost("")
            expect(result).toBe(0)
        }
    );
});
