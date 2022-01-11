import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph.styled';

const Paragraph = ({
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    textAlign,
    color,
    margin,
    padding,
    width,
    text,
}) => {
    return (
        <>
            <P
                fontSize={fontSize}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                lineHeight={lineHeight}
                textAlign={textAlign}
                color={color}
                margin={margin}
                padding={padding}
                width={width}
            >
                {text}
            </P>
        </>
    );
};

Paragraph.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    lineHeight: PropTypes.string,
    textAlign: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
    text: PropTypes.string,
};

Paragraph.defaultProps = {
    fontFamily: 'Roboto, sans-serif',
};

export default Paragraph;
