import { Avatar } from '@material-ui/core'
import React from 'react'
import '../Styles/Sidebar.css'

function Sidebar() {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash"> # </span>

            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQEydV5prpULnQ/profile-displaybackgroundimage-shrink_350_1400/0/1605605004988?e=1615420800&v=beta&t=x2KSpA5S6W8cPaBku7coONUyZeJ2kdShr4ha0d2PAg0" alt="" />

                <Avatar className="sidebar__avatar" />
                <h2>Abdul Shakur</h2>
                <h4>abdulshakuraclement@yahoo.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">23,485</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">3,435</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}



            </div>

        </div>
    )
}

export default Sidebar
