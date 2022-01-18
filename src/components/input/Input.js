import React from 'react';
import PropTypes from 'prop-types';
import { InputSearch } from './Input.styled';

const Input = ({ size,
    placeholder,
    background,
    height,
    display,
    justifyContent,
    alignItems,
    fontWeight,
    padding,
    width,
    border,
    borderRadius,
    margin
}) => {
    return (
        <>
            <InputSearch
                size={size}
                placeholder={placeholder}
                background={background}
                height={height}
                display={display}
                justifyContent={justifyContent}
                alignItems={alignItems}
                fontWeight={fontWeight}
                padding={padding}
                width={width}
                border={border}
                borderRadius={borderRadius}
                margin={margin}
            />
        </>
    );
};

Input.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string,
    background: PropTypes.string,
    height: PropTypes.string,
    display: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    fontWeight: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    margin: PropTypes.string,
};

Input.defaultProps = {
    size: 'medium',
    placeholder: 'input',
    background: 'white',
    height: '2.8em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: '10px',
    width: '150%',
    border: '1px solid #000',
    borderRadius: '30px',
    margin: '10px 0',
};

export default Input;
