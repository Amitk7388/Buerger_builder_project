import React, { Component } from "react"
import classes from "./Modal.css"
import BackDrop from "../Backdrop/Backdrop"
import Aux from "../../../hoc/Aux/Aux"
class Modal extends Component {
    shouldComponentUpdate (nexProps, nextState){
        return nexProps.show !== this.props.show
    }

    componentWillUpdate(){
        console.log("[Modal Updated]")
    }
    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modelClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal