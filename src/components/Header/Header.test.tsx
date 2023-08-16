import { render, screen } from '@testing-library/react';
import Header from '.';
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from '../../styles/themes';

describe("Header tests", () => {
    test("Deve renderizar link da Home", () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </ThemeProvider>
        );
        
        expect(screen.getByTestId('link-home')).toBeInTheDocument();
    });
});
