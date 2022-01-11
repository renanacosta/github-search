import React from "react";
import { Btn } from "./components/button/Button.styled";

const App = () => {
    return (

        <div>
            <h1> GitHub Search App </h1>

            <input type="text" placeholder="user search" />

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