import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../components/footer/Footer';

describe('Footer', () => {
    it('should render without crashing', () => {
        const { container } = render(<Footer />);
        expect(render)
    });

    it('should render the footer', () => {
        const { getByText } = render(<Footer />);
        const footer = getByText('Desenvolvido por: Renan Acosta Ⓒ');
        expect(footer).toBeInTheDocument();
    })
});