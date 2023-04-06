import React from "react";
import './Home.css'

function Home(props) {
  let legenda = 'Estou no React'

  return (
    <div className="Home">
      <h1>{ props.msg }</h1>
      <h2>{ legenda }</h2>
      <input value={legenda} readOnly />
    </div>
  ) 
}

export default Home;