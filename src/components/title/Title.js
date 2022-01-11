import React from 'react';
import PropTypes from 'prop-types';
import { H1, H2, H3, H4 } from '../../components/Title/Title.styled';

const Title = ({
    size,
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
    switch (size) {
        case 'h2':
            size = (
                <H2
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
                </H2>
            );
            break;
        case 'h3':
            size = (
                <H3
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
                </H3>
            );
            break;
        case 'h4':
            size = (
                <H4
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
                </H4>
            );
            break;
        default:
            size = (
                <H1
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
                </H1>
            );
            break;
    }
    return <>{size}</>;
};

Title.propTypes = {
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
    size: PropTypes.string,
};

Title.defaultProps = {
    fontFamily: 'Playfair Display, serif',
};

export default Title;
