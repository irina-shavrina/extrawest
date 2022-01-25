import {stringMerge} from './task_2';

describe('stringMerge', function(){
    test('should return held from words hello and world',
        function(){
            const result1 = stringMerge("hello", "world", "l")
            expect(result1).toBe("held")
        }
    );
    test('should return codinywhere from words coding and anywhere',
        function(){
            const result2 = stringMerge("coding", "anywhere", "n")
            expect(result2).toBe("codinywhere")
        }
    );
    test('should return jasamson from words jason and samson',
        function(){
            const result3 = stringMerge("jason", "samson", "s") 
            expect(result3).toBe("jasamson")
        }
    );
    test('should return wondeople from words wonderful and people',
        function(){
            const result4 = stringMerge("wonderful", "people", "e")
            expect(result4).toBe("wondeople")
        }
    );
});
