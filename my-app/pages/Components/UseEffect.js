// Here I'll try to display only the username from the url and display to the webpage by using useEffect

import { useState, useEffect } from "react";

export default function UseEffect() {
  const [ users, setUser ] = useState([]);  // the useState it set to empty string

  // use state takes 2 parameters
  // it takes first parameter as an function and 2nd as an array
  useEffect(() => {  // Never pass dynamic variables or functions inside the useEffect like useEffect((new Date()) => {})
    console.log("Here we'r in UseEffect()")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  }, []);  // inside this array if we didn't put variable name, this function will run once. If we put will run and update the variable

  console.log(users)  // in inspect

  // So this looks like the array that we're fetching 
  // [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {

  // Here we're returning and displaying only the id, name, username, email
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user?.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div> <br />
          </li>
        ))}
      </ul>
    </>
  )
}