import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, text, size, padding, width, color, background, align }) => {
    switch (size) {
        case 'medium':
            padding = '10px 30px';
            width = '125px';
            align = 'center';
            break;
        case 'large':
            padding = '10px 20px';
            width = '150px';
            align = 'center';
            break;
        case 'x-large':
            padding = '10px 25px';
            width = '200px';
            align = 'center';
            break;
        default:
            padding = '20px';
            width = '100px';
            align = 'center';
            break;
    }

    return (
        <Btn
            onClick={onClick}
            type={type}
            size={size}
            padding={padding}
            width={width}
            color={color}
            background={background}
            align={align}
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
    color: PropTypes.string,
    background: PropTypes.string,
    align: PropTypes.string,
};
Button.defaultProps = {
    type: 'Button',
    size: '',
};

export default Button;
