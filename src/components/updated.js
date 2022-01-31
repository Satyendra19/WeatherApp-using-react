import React from "react";
const Weathercard = ({date,tem,weathermood,icon}) => {


  return(
    <>
      {
        <div className="card">
          <br></br>
          <img src='http://openweathermap.org/img/w/03d.png' alt='icon'/>
          <p>Date: {date}</p>
          <br></br>
          <p>Temp: {tem}&deg;</p>
          <br></br>
          <p>{weathermood}</p>
			  </div>
      }
    </>
  )
  };

export default Weathercard;