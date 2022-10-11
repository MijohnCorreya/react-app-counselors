import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

//props to be passed to the buttons to style the buttons

const STYLES = ['btn--primary', 'btn--outline', 'btn--rounded', 'btn--outline--primary', 'btn--rounded--small'];

const SIZE = ['btn--medium', 'btn--large', 'btn--small', 'btn--x-small'];

//Resuable button component

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    /*setting the button styles*/

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize)
        ? buttonSize
        : SIZE[0];

    return (
        <Link to='/leistungen' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}