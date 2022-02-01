import {invertColor} from './task_7';

describe('invertColor', function(){
    test('should return #ffffff from #000000',
        function(){
            const result = invertColor('#000000') 	 
            expect(result).toBe('#ffffff')
        }
    );
    test('should return #221155 from #DDEEAA',
        function(){
            const result = invertColor('#DDEEAA') 	 
            expect(result).toBe('#221155')
        }
    );
    test('should return #fedcba from #012345',
        function(){
            const result = invertColor('#012345') 
            expect(result).toBe('#fedcba')
        }
    );
});
