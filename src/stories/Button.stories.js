import React from "react";
import Btn from '../components/button/Button';

export default {
    title: "Component/Button/Button",
    component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Button = Template.bind({});
Button.args = {
    onClick: () => {},
    text: 'button',
    size: 'medium',
    align: 'center',
    minHeight: '3.1em',
    width: '150%',
    color: '#000',
    background: 'white',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)',
    padding: '10px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '10px 0'

};
