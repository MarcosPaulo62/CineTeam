import { render, screen } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
    test("Deve renderizar o App", () => {
        render(
            <App />
        );
        
        expect(screen.getByTestId('App')).toBeInTheDocument();
    });
});
