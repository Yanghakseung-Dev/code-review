import React from "react";

const Todos = (props) => {
  console.log(props);
  return (
    <div className="Todos" style={{backgroundColor:'#333'}}>
      <h1>{props.title}</h1>
      <ul>
        {
          props.items.map((item, index) => {
            return <li key={props.title+index}><input type="checkbox" checked={ item.completed }/>{ item.name }</li>
          })
        }
      </ul>
    </div>
  )
};
export default Todos;
