import React, { Component } from 'react';


const PizzaForm = (props) => {

  
    const {topping, vegetarian, size} = props.pizza

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
              onChange={(e) => props.handleTopping(e.target.value)}
              value={
                //Pizza Topping Should Go Here
                props.pizza.topping
            }/>
        </div>
        <div className="col">
          <select value={props.pizza.size} className="form-control"
            onChange={(e) => props.handleSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input className="form-check-input"
            type="radio"
            value="Vegetarian"
            onChange={(e) => props.handleVeggie(e.target.value)}
            checked={props.pizza ? props.pizza.vegetarian : null}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            onChange={(e) => props.handleVeggie(e.target.value)}
            checked={props.pizza ? !props.pizza.vegetarian : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.updateTopping()}>Submit</button>
        </div>
      </div>

    )
  }


export default PizzaForm
