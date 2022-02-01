import {openOrSenior} from './task_2';

describe('openOrSenior', function(){
    test('should return ["Open", "Senior", "Open", "Senior"] from [[31, 10],[55,23],[20, 0],[41, 16]]',
        function(){
            const result1 = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]) 
            expect(result1).toStrictEqual(['Open', 'Senior', 'Open', 'Senior'])
        }
    );
    test('should return ["Open", "Open", "Open", "Open"] from [[34, 11],[55,7],[39, 16],[38, 14]]',
        function(){
            const result1 = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]])
            expect(result1).toStrictEqual(['Open', 'Open', 'Open', 'Open'])
        }
    );
});
