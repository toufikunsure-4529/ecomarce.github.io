import React from 'react';
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "Toufik Sk",
        year: "3rd Year"
    }
    const color="red";
  return (
    <MyContext.Provider value={{state,color}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState