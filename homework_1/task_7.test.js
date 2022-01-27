import {swapCase} from './task_7';

describe('swapCase', function(){
    test('should return "AbC" from string "aBc"',
        function(){
            const result = swapCase("aBc")	
            expect(result).toBe("AbC")
        }
    );
    test('should return "gOOd" from string "GooD"',
        function(){
            const result = swapCase("GooD") 
            expect(result).toBe("gOOd")
        }
    );
    test('should return "HELLO" from string "hello"',
        function(){
            const result = swapCase("hello") 
            expect(result).toBe("HELLO")
        }
    );
    test('should return "75386" from string "75386"',
        function(){
            const result = swapCase("75386")
            expect(result).toBe("75386")
        }
    );
    test('should return "" from nothing',
        function(){
            const result = swapCase()
            expect(result).toBe("")
        }
    );
    test('should return "" from number 75386',
        function(){
            const result = swapCase(75386)
            expect(result).toBe("")
        }
    );
    test('should return "" from string ""',
        function(){
            const result = swapCase("")
            expect(result).toBe("")
        }
    );
});