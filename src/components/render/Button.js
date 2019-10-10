import React from 'react'

const Button = ({onClick, value}) => (
    <button onClick={onClick} className="pure-button" value={value}>{value}</button>
)

export default Button