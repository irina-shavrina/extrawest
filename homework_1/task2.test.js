import {stringMerge} from './task_2';

describe('stringMerge', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result1 = stringMerge("hello", "world", "l")
            expect(result1).toBe("held")
        }
    );
});
describe('stringMerge', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result2 = stringMerge("coding", "anywhere", "n")
            expect(result2).toBe("codinywhere")
        }
    );
});
describe('stringMerge', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result3 = stringMerge("jason", "samson", "s") 
            expect(result3).toBe("jasamson")
        }
    );
});
describe('stringMerge', function(){
    test('shoul return 4 when pass 2 and 2',
        function(){
            const result4 = stringMerge("wonderful", "people", "e")
            expect(result4).toBe("wondeople")
        }
    );
});