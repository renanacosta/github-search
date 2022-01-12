import React, {useState} from "react";
import { Btn } from "./components/button/Button.styled";
import { InputSearch } from "./components/input/Input.styled";
import { Repositories } from "./api/Github";
import Avatar from "./components/avatar/Avatar";

const App = () => {
    const [username, setUsername] = useState("");

    const getRepositories = () => {
        Repositories(username).then(data => {
        });
    }

    return (

        <div>
            <h1> GitHub Search App </h1>

            
            <InputSearch placeholder="Search user" size='18px' onChange={e => setUsername(e.target.value)}/>

            <Btn onClick={() => getRepositories()}>
                Search
            </Btn>

            <Btn>
                Favorites
            </Btn>

            <Avatar />
        </div>

    );
}

export default App;