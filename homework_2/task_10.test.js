import {invertObject} from './task_10';

describe('invertObject', () => {
    test('should return {} from number {}',
        () => {
            const result = invertObject({}) 
            expect(result).toStrictEqual({})
        }
    );
    test('should return {"bar": "foo"} from {"foo": "bar"}',
        () => {
            const result = invertObject({"foo": "bar"}) 
            expect(result).toStrictEqual({"bar": "foo"})
        }
    );
    test('should return {"2": "1", "4": "2", "6": "3"} from {"1": 2, "2": 4, "3": 6}',
        () => {
            const result = invertObject({"1": 2, "2": 4, "3": 6}) 
            expect(result).toStrictEqual({"2": "1", "4": "2", "6": "3"})
        }
    );
    test('should return null from {"foo": "bar", "hello": "world", "js": "bar"}',
        () => {
            const result = invertObject({"foo": "bar", "hello": "world", "js": "bar"})
            expect(result).toStrictEqual(null)
        }
    );
});
