import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Main } from "../../src/09-useContext/Main";

describe('Pruebas en <MainApp/>', () => {

    test('Debe de Mostrar en el HomePage', () => {

        render(

            <MemoryRouter>
                <Main/>
            </MemoryRouter>
        );
        
        expect(screen.getByText("Home Page")).toBeTruthy;
    });

    test('Debe de Mostrar en el LoginPage', () => {

        render(

            <MemoryRouter initialEntries={['/login']}>
                <Main/>
            </MemoryRouter>
        );
        
        expect(screen.getByText("Login Page")).toBeTruthy;
    });

    test('Debe de Mostrar en el AboutPage', () => {

        render(

            <MemoryRouter initialEntries={['/about']}>
                <Main/>
            </MemoryRouter>
        );
        
        expect(screen.getByText("About Page")).toBeTruthy;
    });
});