import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, text, size, padding, width }) => {
    switch (size) {
        case 'medium':
            padding = '10px 30px';
            width = '125px';
            break;
        case 'large':
            padding = '10px 20px';
            width = '150px';
            break;
        case 'x-large':
            padding = '10px 25px';
            width = '200px';
            break;
        default:
            padding = '20px';
            width = '100px';
            break;
    }

    return (
        <Btn
            onClick={onClick}
            type={type}
            size={size}
            padding={padding}
            width={width}
        >
            {text}
        </Btn>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
};
Button.defaultProps = {
    type: 'Button',
    size: '',
};

export default Button;
