import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/userContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage/>', () => {  

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });

    test('Debe de llamar al setUser con click en el button', () => {
        
        const setUserMock = jest.fn();
        const user = {id:123,name: 'Juan Esteban',email: 'juan@google.com'}

        render(
            <UserContext.Provider value={{setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toBeCalledWith(user);
    });
});