import React from 'react';
import PropTypes from 'prop-types';
import { InputSearch } from './Input.styled';

const Input = ({ size, placeholder, value, onChange }) => {
    return (
        <>
            <InputSearch
                size={size}
                placeholder={placeholder}
                defaultValue={value}
                onChange={onChange}
            />
        </>
    );
};

Input.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    size: 'medium'
};

export default Input;
