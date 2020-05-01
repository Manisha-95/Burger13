import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import Buildcontrols from "../../component/Burger/Buildcontrols/Buildcontrols";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  };
  render() {
    return (
      <Aux>
        <Burger type={this.state.ingredients} />
        <Buildcontrols />
      </Aux>
    );
  }
}
export default BurgerBuilder;
