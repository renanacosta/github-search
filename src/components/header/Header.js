import React from "react";
import { BoxLogout } from '../../components/header/Header.styled';
import assets from '../../assets/logout.png'

const Header = () => {
    const LogOut = () => {
        window.open('http://localhost:5000/auth/logout', '_self');
        localStorage.removeItem('logIn');
    };
    return (
        // botao de logout
        <BoxLogout>
            <img src={assets}
                data-testid="logout"
                onClick={LogOut}
                alt='logout'
                title='Logout'
                style={{
                    cursor: 'pointer',
                    background: '#ac00f7',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: '10px',
                    marginLeft: 'auto',
                    marginRight: '5%'
                }} />

        </BoxLogout>
    );
}

export default Header;