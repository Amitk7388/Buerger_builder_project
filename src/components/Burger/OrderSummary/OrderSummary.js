import React, { Component } from "react"
import Aux from "../../../hoc/Aux/Aux"
import Button from "../../UI/Button/Button"
class OrderSummary extends Component {
    //This could  be a Functional component // there is no need to add class based componenent, this is here class base is for testing

    render() {
        const ingred = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}><span style={{ textTransform: "capitalize" }}>{igKey} : {this.props.ingredients[igKey]}</span></li>
                )
            })
        return (
            <Aux>
                <h3> Your Order</h3>
                <p>A Delecious with following ingredients</p>
                <ul>{ingred}</ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p> Continue to Checkout ?</p>
                <Button buttonType="Danger" clicked={this.props.purchedCancel}>CANCEL</Button>
                <Button buttonType="Success" clicked={this.props.purchaseCont}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary