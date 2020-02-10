import React, { Component } from "react"
import Aux from "../../hoc/Aux/Aux"
import Burger from "../../components/Burger/Burger"
import BuildControl from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const Ingred_Price = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.4
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }


    updatePurchaseState(UpdatedIngred) {
        const sum = Object.keys(UpdatedIngred)
            .map(igKeys => {
                return UpdatedIngred[igKeys]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

        this.setState({ purchasable: sum > 0 })
    }

    addingIngredHandler = (type) => {
        const oldcount = this.state.ingredients[type]
        const updateCount = oldcount + 1
        const UpdatedIngred = {
            ...this.state.ingredients
        }
        UpdatedIngred[type] = updateCount

        const PriceAddition = Ingred_Price[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + PriceAddition

        this.setState({ totalPrice: newPrice, ingredients: UpdatedIngred });
        this.updatePurchaseState(UpdatedIngred)
    }

    removeIngredHandler = (type) => {
        const oldcount = this.state.ingredients[type]
        if (oldcount <= 0) {
            return;
        }

        const updateCount = oldcount - 1
        const UpdatedIngred = {
            ...this.state.ingredients
        }
        UpdatedIngred[type] = updateCount

        const PriceDeduction = Ingred_Price[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - PriceDeduction

        this.setState({ totalPrice: newPrice, ingredients: UpdatedIngred });
        this.updatePurchaseState(UpdatedIngred)
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContHandler = () => {
        alert("You Continued!!")
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchedCancel={this.purchaseCancelHandler}
                        purchaseCont={this.purchaseContHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControl
                    ingredientAdded={this.addingIngredHandler}
                    ingredientRemove={this.removeIngredHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        )
    }
}

export default BurgerBuilder;