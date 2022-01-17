import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/header/Header';

describe('Header', () => {
    it('should render without crashing', () => {
        const { container } = render(<Header />);
        expect(render)
    });

    it('should render the logout', () => {
        const { getByTestId } = render(<Header />);
        const logout = getByTestId('logout');
        expect(logout).toBeInTheDocument();
    })

});
