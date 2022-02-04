import {transformStateWithClones} from './task_9';

describe('transformStateWithClones', () => {
    test('should return { foo: "bar", name: "Jim" } from object',
        () => {
            const state =  {foo: 'bar', bar: 'foo'};
            const transforms =  [
                {operation: 'addProperties', properties: {name: 'Jim', hello: 'world'}}, 
                {operation: 'removeProperties', properties: ['bar', 'hello']},
                {operation: 'addProperties', properties: {another: 'one'}}
            ];
            const result = transformState(state, transforms)
                    
            expect(result).toStrictEqual([
                {foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world'},
                {foo: 'bar', name: 'Jim'},
                {foo: 'bar', name: 'Jim', another: 'one'}
                    ])
            expect(state).toEqual({foo: 'bar', bar: 'foo'});
        }
    );
    test('should return { foo: "bar", name: "Jim" } from object',
        () => {
            const state =   {foo: 'bar', bar: 'foo'};
            const transforms =  [
                {operation: 'addProperties', properties: {yet: 'another property'}}, 
                {operation: 'clear'},
                {operation: 'clear'},
                {operation: 'addProperties', properties: {foo: 'bar', name: 'Jim'}}
            ];
            const result = transformState(state, transforms)
                    
            expect(result).toStrictEqual([
                {foo: 'bar', bar: 'foo', yet: 'another property'},
                {},
                {},
                {foo: 'bar', name: 'Jim'}
                    ])
            expect(state).toEqual({foo: 'bar', bar: 'foo'});
        }
    );
    test('should return { foo: "bar", name: "Jim" } from object',
        () => {
            const state =   {};
            const transforms =  [
                {operation: 'addProperties', properties: { name: 'Jim' }}
            ];
            const result = transformState(state, transforms)
                    
            expect(result).toStrictEqual([{name: 'Jim'}])
            expect(state).toEqual({});
            
    }
);
});
