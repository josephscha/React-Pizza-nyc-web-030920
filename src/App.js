import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const pizzaUrl = "http://localhost:3000/pizzas"
const header = {
  Accept: "application/json",
  "Content-Type": 'application/json'
}
class App extends Component {
  state = {
    pizzas: [],
    id: "",
    topping: "",
    size: "",
    vegetarian: null
  }

  fetchPizzas = () => {
    fetch(pizzaUrl).then(resp => resp.json()).then(data => this.setState({pizzas: data}))
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  editPizzaHandler = (id,topping,size,vegetarian) => {
    // console.log(id,topping,size,vegetarian)
    this.setState({id: id, topping: topping, size: size, vegetarian: vegetarian})
  }
  
  toppingHandler = (value) => {
    this.setState({topping: value})
  }

  sizeHandler = (value) => {
    this.setState({size: value})
  }

  vegetarianHandler = (value) => {
    this.setState({vegetarian: value})
  }

  submitHandler = () => {
    fetch(pizzaUrl+"/"+this.state.id, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    }).then(resp => resp.json())
    .then(data => this.setState({pizzas: this.state.pizzas.map(pizza => pizza.id !== this.state.id ? pizza : data)})
    ).then(this.setState({id: "", topping: "", size: "", vegetarian: null}))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        topping={this.state.topping}
        size={this.state.size}
        vegetarian={this.state.vegetarian}
        toppingHandler={this.toppingHandler}
        sizeHandler={this.sizeHandler}
        vegetarianHandler={this.vegetarianHandler}
        submitHandler={this.submitHandler}
        />
        <PizzaList 
        pizzas={this.state.pizzas}
        editPizzaHandler={this.editPizzaHandler}
        />
      </Fragment>
    );
  }
}

export default App;
