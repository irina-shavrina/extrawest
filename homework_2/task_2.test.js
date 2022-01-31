import {openOrSenior} from './task_2';

describe('openOrSenior', function(){
    test('should return 11 when pass 4 and 7',
        function(){
            const result1 = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]) 
            expect(result1).toBe(['Open', 'Senior', 'Open', 'Senior'])
        }
    );
    test('should return -3 when subtract 15 and 18',
        function(){
            const result1 = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])
            expect(result1).toBe(['Open', 'Open', 'Open', 'Open'])
        }
    );
    test('should return 25 when multiply 5 and 5',
        function(){
            const result1 = calculateRentalCost(7)
            expect(result1).toBe(230)
        }
    );
    
});
