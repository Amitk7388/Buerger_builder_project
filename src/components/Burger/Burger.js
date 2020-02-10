import React from "react"
import classes from "./Burger.css"
import BurgerIngredeint from "./Burgeringred/Burgeringred"


const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredeint key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if(ingredients.length === 0){
        ingredients = <p>Please Start Adding Ingredeints</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredeint type="bread-top" />
            {ingredients}
            <BurgerIngredeint type="bread-bottom" />
        </div>
    );
}

export default burger