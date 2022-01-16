// * Test * //
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Input from '../components/input/Input';

describe('Input', () => {
    it('should render without crashing', () => {
        const { container } = render(<Input />);
        expect(container).toBeTruthy();
    });
    }
);

