import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            onChange={(event) => props.toppingHandler(event.target.value)}
            value={props.topping}/>
        </div>
        <div className="col">
          <select value={props.size} 
          onChange={(event) => props.sizeHandler(event.target.value)} 
          className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input className="form-check-input" 
            name="vegetarian" type="radio" 
            value="Vegetarian" 
            onChange={() => props.vegetarianHandler(true)} 
            checked={props.vegetarian === null? false : props.vegetarian? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
            name="vegetarian" type="radio" 
            value="Not Vegetarian" 
            onChange={() => props.vegetarianHandler(false)} 
            checked={props.vegetarian === null? false : props.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={() => props.submitHandler()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
