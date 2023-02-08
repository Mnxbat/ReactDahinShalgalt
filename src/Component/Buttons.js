import React from "react";
import styles from "./Buttons.module.css"
import { getClasses } from "./getClass"

const Buttons  = ({variant, text}) => {
    const typesButtons = {
        red: "red",
        black: "black",
        blue: "blue"
    }
    return (
        <>
        <button className={getClasses(
            [styles.button, styles[`Buttons-${typesButtons[variant]}`]])} >
            {text}
            </button>
       
        </>
    )
}
export default Buttons;