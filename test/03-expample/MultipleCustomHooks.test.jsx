import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-expample";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment:mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        });
        
        render(<MultipleCustomHooks/>);
        
        const nexQuote = screen.getByRole('button',{name:'Next Quote'});
        expect(nexQuote.className).toBe('btn btn-secondary');
        expect(nexQuote.disabled).toBeTruthy;
    });

    test('Debe de mostrar un Qoute', () => {

        useFetch.mockReturnValue({
            data:[{ author:'Fajardo',quote:'Sos un crack papa'}],
            isLoading:false,
            hasError:null
        });

        render(<MultipleCustomHooks/>);

        const nexQuote = screen.getByRole('button',{name:'Next Quote'});

        expect(nexQuote.className).toBe('btn btn-secondary');
        expect(nexQuote.disabled).toBeFalsy;
        
    });

    test('Debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data:[{ author:'Fajardo',quote:'Sos un crack papa'}],
            isLoading:false,
            hasError:null
        });

        

        const {increment} = renderHook( () => useCounter());

        render(<MultipleCustomHooks/>);

        const nexQuote = screen.getByRole('button',{name:'Next Quote'});
        
        fireEvent.click(nexQuote);

        expect(mockIncrement).toHaveBeenCalled();
        
    });
});