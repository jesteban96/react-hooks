import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el UseCounter', () => {
    
    test('Debe retornar los valores por defecto', () => {
        
        const {result} = renderHook( () => useCounter());
        const { counter, increment, decrement, reset} = result.current;

        expect( counter ).toBe(1);
        expect( increment ).toEqual( expect.any(Function));
        expect( decrement ).toEqual( expect.any(Function));
        expect( reset ).toEqual( expect.any(Function));
    });

    test('Debe de generar el valor del counter con el valor de 100', ()=>{
        const { result } = renderHook( () => useCounter(100));
        const {counter} = result.current;
        expect( counter ).toBe(100);
    });

    test('Debe de incrementar el counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { increment } = result.current;

        act(()=>{
            increment();
        });

        expect( result.current.counter ).toBe(101);
        
    });

    test('Debe de Decrementar el counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { decrement } = result.current;

        act(()=>{
            decrement();
        });

        expect( result.current.counter ).toBe(99);
        
    });

    test('Debe de resetear el counter', () => {
        const { result } = renderHook( () => useCounter(100));
        const { decrement,reset } = result.current;

        act(()=>{
            decrement(10);
            reset();
        });

        expect( result.current.counter ).toBe(100);
        
    });
});