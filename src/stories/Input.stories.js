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
    placeholder: 'placeholder',
    defaultValue: 'value',
    onChange: 'onChange',
    onKeyUp: 'onKeyUp',

};


