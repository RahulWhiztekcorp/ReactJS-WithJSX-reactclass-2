import React, { useState } from 'react'

const SearchTodo = (p) => {
    const [text,setText] = useState();
  return (
    <>
        <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{p.add(text)}}>Add Todo</button>
    </>
  )
}

export default SearchTodo