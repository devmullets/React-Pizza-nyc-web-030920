import React from "react"

const Pizza = (props) => {
  const {id, size, topping, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? "Yes" : "No"}</td>
      <td><button 
        type="button" 
        className="btn btn-primary"
        onClick={ () => props.loadPizzaForm(props.pizza) }
      >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
