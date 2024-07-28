import React, { useState } from 'react'

function Weather() {
    const[search, setSearch] = useState("")
    const [city, setCity] = useState("")
    const [lan,setLan] = useState("")

    
   async function fecthWeather(){
        try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=16772b706cff27540f131e667573c244`)
        .then((res)=>res.json())
        if(response){
            setCity(response)
            setSearch(response)
            setLan(response)
            console.log(response)
                
        }
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
        <input type="search" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='search location'/>
        <button onClick={fecthWeather}>search</button>
        {/* commentsg */}
        {
            city &&
            <p>{city[0].name}</p>

        }      
        {
             lan &&
             <p>{lan[0].lat}</p>
        }  

    </div>
  )
}

export default Weather