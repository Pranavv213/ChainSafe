import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Background from './background.jpeg'
const Home = () => {

return(
  <>
  <div style={{'background-color': 'red','size':'100%'}}>
     <Link to="/player" className="link">Player Page</Link>
  </div>
  </>
)
}

export default Home;
