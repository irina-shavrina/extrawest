import {createAdder} from './task_13';
const adder1 = createAdder();
const adder2 = createAdder(100);

describe('createAdder', () => {
    test('should return 0 from adder1()',
        () => {
            expect(adder1()).toBe(0)
        }
    );
    test('should return 30 from adder1(10, 20)',
        () => {
            expect(adder1(10, 20)).toBe(30)
        }
    );
    test('should return 100 from adder1(30, 40)',
        () => {
            expect(adder1(30, 40)).toBe(100)
        }
        );
    test('should return 110 from adder2(10)',
        () => {
            expect(adder2(10)).toBe(110)
        }
    );
    test('should return 200 from adder2(20, 30, 40)',
        () => {
            expect(adder2(20, 30, 40)).toBe(200)
        }
    );
    test('should return 200 from adder2()',
        () => {
            expect(adder2()).toBe(200)
        }
        );
    });