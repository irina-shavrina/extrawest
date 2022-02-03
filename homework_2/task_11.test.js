import {makeArmy} from './task_11';
const shooters = makeArmy(10) 	 	 

describe('makeArmy', () => {
    test('should return 0 from shooters[0]()',
        () => {
            expect(shooters[0]()).toBe(0)
        }
    );
    test('should return 5 from shooters[5]()',
        () => {
            expect(shooters[5]()).toBe(5)
        }
    );
    test('should return 9 from shooters[9]()',
        () => {
            expect(shooters[9]()).toBe(9)
        }
    );
});
