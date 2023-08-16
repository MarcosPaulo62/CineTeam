import { render, screen } from '@testing-library/react';
import Home from './Home';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../styles/themes';

describe("Home tests", () => {
    test("Deve renderizar os elementos da Home", () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <Home onToggleTeam={() => {}} />
            </ThemeProvider>
        );
        
        expect(screen.getByText("Escolha seu time")).toBeInTheDocument();
        expect(screen.getByTestId('principal-section')).toBeInTheDocument();
        expect(screen.getByTestId('img-marvel')).toBeInTheDocument();
        expect(screen.getByTestId('img-dc')).toBeInTheDocument();
    });
});
