import React from 'react';
import Nav from './Nav';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <h1>PokeApi</h1>
            <Nav />
        </header>
    );
};

export default Header;