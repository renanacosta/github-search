import React from "react";
import Ipt from '../components/input/Input';

export default {
    title: "Component/Input/Input",
    component: Ipt,
};

const Template = (args) => <Ipt {...args} />;

export const Input = Template.bind({});
Input.args = {
    type: "text",
    placeholder: "Input",
    size: "medium",
    padding: "20px",
    width: "100px",
    color: "",
    background: "red",
};

    
