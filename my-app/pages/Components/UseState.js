// useState is a hook that allows you to add state to a functional component. It takes an initial value 
//and returns an array with two elements: the first element is the current state value, and the second element is a function 
//that can be used to update the state value. Whenever the state value changes, React will automatically re-render
//the component, updating any parts of the UI that depend on the state.

import { useState } from "react";

export default function UseState() {

    // first element it'll be current value and 2nd element will be its function to update the state value.
    const [ count, setCount ] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }


    return (
        <>
            <p>You Clicked times: {count}</p>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}