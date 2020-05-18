import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaUrl = 'http://localhost:3000/pizzas'
const newHeaders = {
  'Content-type': 'application/json; charset=UTF-8'
  }

class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {
      id: '',
      topping: '',
      vegetarian: '',
      size: '',

    }
  }

  handleTopping = (updateTopping) => {
    // this.setState({currentPizza: topping })
    // console.log('topping' , updateTopping)
    // const obj = { foo: "a", bar: "b" };
    // const updatedObj = { ...obj, foo: 1 };
    // assert.deepEqual(updatedObj, { foo: 1, bar: "b" });
    const newTopping = {...this.state.currentPizza, topping: updateTopping}
    this.setState({currentPizza: newTopping})
  }

  handleSize = (newSize) => {
    const updatedSize = {...this.state.currentPizza, size: newSize}
    this.setState({currentPizza: updatedSize})
  }

  handleVeggie = (isVeggie) => {
    if (isVeggie === 'Vegetarian'){ 
      const updatedVeggie = {...this.state.currentPizza, vegetarian: true}
      this.setState({currentPizza: updatedVeggie})
    } else {
      const updatedVeggieFalse = {...this.state.currentPizza, vegetarian: false}
      this.setState({currentPizza: updatedVeggieFalse})
    }
  }

  updateTopping = () => {
    fetch(`${pizzaUrl}/${this.state.currentPizza.id}`, {
      method: 'PATCH',
      body: JSON.stringify(this.state.currentPizza),
      headers: newHeaders})
        .then(response => response.json())
        .then(this.getPizzas())
/* will return
{
“userId”: 1,
“id”: 1,
“title”: “delectus aut autem”,
“completed”: true
}
*/
  }

  getPizzas = () => {
    // load initial toppings
    fetch(pizzaUrl)
      .then(response => response.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  componentDidMount(){
    this.getPizzas()
  }

  loadPizzaForm = (pizzaObj) => {
    // user clicks on edit button for single pizza topping
    this.setState({ currentPizza: pizzaObj })

  }


  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.currentPizza} 
          handleTopping={this.handleTopping}
          handleSize={this.handleSize} 
          handleVeggie={this.handleVeggie} 
          updateTopping={this.updateTopping}
        />
        <PizzaList pizzas={this.state.pizzas} loadPizzaForm={this.loadPizzaForm} />
      </Fragment>
    );
  }
}

export default App;
