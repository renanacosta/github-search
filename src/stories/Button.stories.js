import React from "react";
import Btn from '../components/button/Button';

export default {
    title: "Component/Button/Button",
    component: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Button = Template.bind({});
Button.args = {
    text: "Button",
    type: "button",
    size: "medium",
    padding: "20px",
    width: "100px",
    color: "#FFF",
    background: "#ac00f7",
};

    
