import React from 'react'
import '../Styles/InputOption.css'

function InputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            <h5>{title}</h5>

        </div>
    )
}

export default InputOption
