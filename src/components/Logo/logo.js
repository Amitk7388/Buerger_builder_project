import React from "react"
import burgerLogo from "../../assets/images/burger-logo.png"
import classes from "./logo.css"
const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Here"></img>
    </div>
)


export default logo