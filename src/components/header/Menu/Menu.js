import React from 'react'
import st from './Menu.module.css'
import { NavLink } from 'react-router-dom'



const Menu = (props) => {
    return (
        <div className={st.menu}>
            <div className={st.item}><NavLink exact activeClassName={st.active} to='/'>ГЛАВНАЯ</NavLink></div>
            <div className={st.item}><NavLink activeClassName={st.active} to='/about'>ОБО МНЕ</NavLink></div>
            <div className={st.item}><NavLink activeClassName={st.active} to='/services'>УСЛУГИ</NavLink></div>
            <div className={st.item}><NavLink activeClassName={st.active} to='/contacts'>КОНТАКТЫ</NavLink></div>
        </div>
    )
}

export default Menu;