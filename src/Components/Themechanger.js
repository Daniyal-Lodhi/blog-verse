import React, { useContext } from 'react'
import "./css/Home.css"
import { ThemeContext } from '../App'
const Themechanger = () => {
    const context = useContext(ThemeContext) ;
    const {themetype,setthemetype,handleThemeType} = context ;
    return (
        <div id='themechanger' onClick={handleThemeType} >
            <i class={`gg-${themetype}`} ></i>
        </div>
    )
}

export default Themechanger
