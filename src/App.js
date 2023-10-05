import { useEffect, useMemo, useState } from 'react';
import './App.css';
import MainTodo from './components/MainTodo'
import React from 'react'

// function App() {
class App extends React.Component {
  constructor() {
     
  }
  // function add(num1,num2){
  //   return num1+num2
  // }
  // console.log(add(250,250))
  // console.log(add(50,150))

  // const [counter, setCounter] = useState(0);
  // let num1 = 2;
  // let num2 = 2;
  // let sum = useMemo(
  //   () => {
  //     return num1 + num2
  //   }, [num1, num2]
  // )
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [product, setProduct] = useState(
  //   [
  //     { id: 1, name: 'One Plus Nord CE2', price: 20000 },
  //     { id: 2, name: 'Oppo F21 S', price: 15000 },
  //     { id: 3, name: 'Samsung Galaxy M 33', price: 17000 }
  //   ]
  // )
  // const [searchText, updateSearchText] = useState('');

  //type-1
  // const filteredProducts = filterProducts(product, searchText);

  // function filterProducts(product, searchkey) {
  //   return product.filter(
  //     (p) => {
  //       return p.name.toLowerCase().includes(searchkey)
  //     }
  //   )
  // }

  // //type-2
  // const filteredProducts = useMemo(
  //   () => {
  //     return product.filter(
  //       (p) => {
  //         return p.name.toLowerCase().includes(searchText.toLowerCase())
  //       }
  //     )
  //   }, [product, searchText]
  // )

  // useEffect(
  //   () => {
  //     setInterval(
  //       () => {
  //         setTime(new Date().toLocaleTimeString())
  //       }, 1000)
  //   }, []
  // )
  render() {
    return (
      <>
        {/* <div className="App">
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Update Counter</button>
        <h6>Counter : {counter}</h6>
        <h5>Sum : {sum}</h5>
      </div>
      <div>
        <p>Time : <b>{time}</b></p>
        <input type='text' value={searchText} onChange={e => updateSearchText(e.target.value)} />
        <button>Update</button>
        <table border={2}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredProducts.map(
                p => (
                  <tr key={p.id}>
                    <th>{p.id}</th>
                    <th>{p.name}</th>
                    <th>{p.price}</th>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
      <Parent></Parent>
      <MainTodo></MainTodo> */}
        <h1>Component life cycle hooks in react</h1>
      </>
    )
  }
}

export default App;


function Parent() {
  const [course, setCourse] = useState();
  const mf = (data) => {
    setCourse(data)
  }
  return (
    <Child msg1='hello' msg2='Rahul Kondi' mf={mf} msg3={course}></Child>

  )
}
function Child(p) {
  return (
    <div>
      {p.msg1}&nbsp;{p.msg2}
      {p.mf('Fullstack')}&nbsp;{p.msg3}
    </div>
  )
}
