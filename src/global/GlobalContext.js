import React from 'react';

export const GlobalContext = React.createContext();

export const User = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [showUser, setShowUser] = React.useState(false);
    const [showRepos, setShowRepos] = React.useState(false);
    const [showStarred, setShowStarred] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                showUser,
                setShowUser,
                showRepos,
                setShowRepos,
                showStarred,
                setShowStarred,
                message,
                setMessage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
