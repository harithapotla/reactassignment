import React from "react";
function Counter(props){
var [count,setCount]=React.useState(props.start)

function inc(){
    setCount(count+props.step)
}

function dec(){
    setCount(count-props.step)
}

function mul(){
    setCount(count*props.step)
}
return (<div className="betterview">
<h1>Count:{count}</h1>
<button onClick={inc}>Inc</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={dec}>Dec</button><br></br>
<button onClick={mul}>Mul</button>

</div>)

}

export default Counter;