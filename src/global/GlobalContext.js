import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const UserGlobalContext = ({ children }) => {
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [profile, setProfile] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [image, setImage] = useState("");

    return (
        <GlobalContext.Provider
            value={{
               username, setUsername, 
               repositories, setRepositories, 
               profile, setProfile, 
               favorites, setFavorites,
                image, setImage
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
