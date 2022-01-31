import React,{ useState, useEffect } from 'react';
import Weathercard from "./updated";
import "./weather.css";
const Weather = () =>{
    const [searchValue,setSearchValue] = useState("");
    const [tempInfo, setTempInfo] = useState();
    const getWeatherInfo = async () => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${searchValue}&cnt=5&units=metric&appid=37f527308bc9a809150e40dbb1cf6d63`;
        let response= await fetch(url);
        let data= await response.json();
        setTempInfo(data.list.map(s=>{
            return{
                tem:s.main.temp,
                date:s.dt_txt,
                weathermood:s.weather[0].main,
                icon:s.weather[0].icon
            }
            
        }));
        console.log(data);
    };
    
    useEffect(() => {
        getWeatherInfo();
      },[searchValue]);

    return(
        <>
        <div>
            <span className='title'><h1>Weather App</h1></span>
            <br/>
            
            <form className='search'>
                <input className='searchTerm' type="text" name="city" placeholder='city' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <button className='searchButton' type='submit'>Get Weather</button>
            </form>
        </div>
        <div className='Mcard'>
            {!!tempInfo && tempInfo.map((i,index)=>(
                <div key={index}>
                    <Weathercard date={i.date} temp={i.tem} weathermood={i.weathermood}
                    icon={i.icon}/>
                </div>  
            ))}
        </div>
        </>
    );
};
export default Weather;