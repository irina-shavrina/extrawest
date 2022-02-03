import {frankenSplice} from './task_14';

describe('frankenSplice', () => {
    test('should return [16, 1764, 36] from [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]',
        () => {
            const result = frankenSplice([1, 2, 3], [4, 5], 1) 	 	 
            expect(result).toStrictEqual([4, 1, 2, 3, 5])
        }
    );
    test('should return [9, 100, 49] from [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]',
        () => {
            const result = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)  	 
            expect(result).toStrictEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"])
        }
    );
    test('should return [9, 100, 49] from [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]',
        () => {
            const result = frankenSplice([1, 2, 3, 4], [], 0)  	 
            expect(result).toStrictEqual([1, 2, 3, 4])
        }
    );
});
