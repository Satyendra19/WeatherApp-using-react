import React from "react";
const Weathercard = ({date,tem,weathermood}) => {


  return(
    <>
      {
        <div className="card">
          <br></br>
          {/* <img src={iconurl} alt=''/> */}
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