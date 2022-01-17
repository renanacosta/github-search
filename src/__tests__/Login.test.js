// * Test * //
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../page/Login';

describe ('Login', () => {
    it ('should render without crashing', () => {
        const { container } = render(<Login />);
        expect(container).toBeTruthy();
    });

    it('should render the logInGitHub', () => {
        const { getByTestId } = render(<Login />);
        const logInGitHub = getByTestId('logInGitHub');
        expect(logInGitHub).toBeInTheDocument();
    })
});



