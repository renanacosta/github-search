import React from "react";
import Ipt from '../components/input/Input';

export default {
    title: "Component/Input/Input",
    component: Ipt,
};

const Template = (args) => <Ipt {...args} />;

export const Input = Template.bind({});
Input.args = {
    size: "medium",
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
    margin: '10px 0'
};


