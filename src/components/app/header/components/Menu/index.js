import React from "react"
import MenuItem from "./MenuItem"
import style from './style.module.scss'

class Menu extends React.Component {
    render() {
        return(
            <div className={style.menu}>
    <MenuItem title="Курсы"/>
    <MenuItem title="Мастер-классы"/>
    <MenuItem title="Преподаватели"/>
    <MenuItem title="Блог"/>
    <MenuItem title="Контакты"/>
</div>
        )
    }
};

export default Menu