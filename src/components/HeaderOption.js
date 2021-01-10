import React from 'react'
import '../Styles/HeaderOption.css';
import { Avatar } from "@material-ui/core"

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {/* ICONS */}
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (<Avatar className="headerOption__icon" src={avatar} />)}

            {/* TITLE */}
            <h3 className="headerOption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption
