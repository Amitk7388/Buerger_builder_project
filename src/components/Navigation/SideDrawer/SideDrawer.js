import React from "react"
import Logo from "../../Logo/logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.css"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Aux/Aux"
const sideDrawer = (props) => {
    let attchedClass = [classes.SideDrawer, classes.Close]
    if(props.open) {
        attchedClass = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attchedClass.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer

