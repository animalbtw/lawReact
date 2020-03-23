import React from 'react'
import st from './Header.module.css'
import Menu from './Menu/Menu';
import Info from './Info/Info';
import Contacts from './Contacts/Contacts';


const Header = (props) => {
    return(
        <div className={st.header}>
            <Info />
            <Menu />
            <Contacts />
        </div>
    )
}

export default Header;