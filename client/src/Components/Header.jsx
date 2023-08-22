import React from "react";

const Header = () => {
    return (
        <header>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        </header>
    );
};

export default Header;
