import React from "react";
import { Btn } from "./components/button/Button.styled";
import { InputSearch } from "./components/input/Input.styled";

const App = () => {
    return (

        <div>
            <h1> GitHub Search App </h1>

            <InputSearch placeholder="Search user" size='18px'/>

            <Btn>
                Search
            </Btn>

            <Btn>
                Favorites
            </Btn>


        </div>

    );
}

export default App;