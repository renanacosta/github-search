import React from 'react';
import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick,
    text,
    size,
    align,
    minHeight,
    width,
    color,
    background,
    borderRadius,
    border,
    boxShadow,
    padding,
    fontSize,
    fontWeight,
    cursor
    
}) => {
    switch (size) {
        case 'medium':
            align = 'center';
            minHeight = '3.1em';
            width = '150px';
            borderRadius = '30px';
            border = 'none';
            boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.9)';
            padding = '10px';
            fontSize = '1.2em';
            fontWeight = 'bold';
            cursor = 'pointer';
            break;
            // padding = '10px 30px';
            // width = '125px';
            // align = 'center';
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
            align={align}
            minHeight={minHeight}
            width={width}
            color={color}
            background={background}
            borderRadius={borderRadius}
            border={border}
            boxShadow={boxShadow}
            padding={padding}
            fontSize={fontSize}
            fontWeight={fontWeight}
            cursor={cursor}
        >
            {text}
        </Btn>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    align: PropTypes.string,
    minHeight: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    borderRadius: PropTypes.string,
    border: PropTypes.string,
    boxShadow: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    cursor: PropTypes.string
};
Button.defaultProps = {
    onclick
};

export default Button;
