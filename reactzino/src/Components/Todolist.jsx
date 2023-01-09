import React from "react";

function Todolist(){
    var [todo,setTodo]=React.useState(['carwash','iron','freshup'])
    var [newtodo,setnewtodo]=React.useState()
function add(){
    
}

    return(<div className="betterview">
        <h1>Todolist</h1>
        <input type="text"></input>
        <button onClick={add}>Add</button>
        <ul>
        {
            todo.map((s,i)=>{
                return(<li>{s}</li>)
            })
        }
        </ul>
        </div>
    )
    
}

export default Todolist;