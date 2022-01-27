import {vowelCount} from './task_9';

describe('vowelCount', function(){
    test('should return 5 from string "abracadabra"',
        function(){
            const result = vowelCount('abracadabra')	
            expect(result).toBe(5)
        }
    );
    test('should return 2 from string "letter"',
        function(){
            const result = vowelCount('letter')
            expect(result).toBe(2)
        }
    );
    test('should return 1 from string "toy"',
        function(){
            const result = vowelCount('toy')
            expect(result).toBe(1)
        }
    );
    test('should return 0 from string "555"',
        function(){
            const result = vowelCount('555')
            expect(result).toBe(0)
        }
    );
    test('should return 2 from string "let  ter"',
        function(){
            const result = vowelCount('let  ter')
            expect(result).toBe(2)
        }
    );
    test('should return 0 from nothing',
        function(){
            const result = vowelCount()
            expect(result).toBe(0)
        }
    );
    test('should return 0 from number 12345"',
        function(){
            const result = vowelCount(12345)
            expect(result).toBe(0)
        }
    );
    test('should return 0 from string ""',
        function(){
            const result = vowelCount('')
            expect(result).toBe(0)
        }
    );
});
