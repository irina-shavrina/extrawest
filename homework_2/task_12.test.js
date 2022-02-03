import {createPrevArgSaver} from './task_12';
const argSaver = createPrevArgSaver();

describe('createAdder', () => {
    test('should return undefined from argSaver(123)',
        () => {
            expect(argSaver(123)).toBe(undefined)
        }
    );
    test('should return 123 from argSaver(456)',
        () => {
            expect(argSaver(456)).toBe(123)
        }
    );
    test('should return 456 from argSaver(100, 200, 300)',
        () => {
            expect(argSaver(100, 200, 300)).toBe(456)
        }
        );
    test('should return 100 from argSaver()',
        () => {
            expect(argSaver()).toBe(100)
        }
    );
    test('should return undefined from argSaver(741)',
        () => {
            expect(argSaver(741)).toBe(undefined)
        }
    );
    });