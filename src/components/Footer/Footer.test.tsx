import { render, screen } from '@testing-library/react';
import Footer from '.';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../../styles/themes';

describe("Footer tests", () => {
    test("Deve renderizar texto do Footer", () => {
        render(
            <ThemeProvider theme={defaultTheme}>
                <Footer />
            </ThemeProvider>
        );
        
        expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    });
});
