import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Salman Khan", "Aamir Khan", "Salman Shah", "Allu Arjun", "Shakib"];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$19.99'},
    {name: 'pdf reader', price: '$6.66'},
    {name: 'premire pro', price: '$67.66'}
  ];
 
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'tomato'}}>I am a react developer</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }

          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h1>Display Users: {users.length}</h1>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
 
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: '1px solid red', margin: '10px', width: '400px'}}>
      <h1>Name: {props.name}</h1>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

function Product(props){
  
  const productStyle = {
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    width: '200px',
    height: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
