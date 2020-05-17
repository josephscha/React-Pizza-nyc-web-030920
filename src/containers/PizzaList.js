import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {
  editPizzaHandler = () => {
    this.props.editPizzaHandler()
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map((pizza,index) => 
          <Pizza key={index} {...pizza}
          editPizzaHandler={this.props.editPizzaHandler}
          />)}
        </tbody>
      </table>
    );
  }

} 

export default PizzaList;
