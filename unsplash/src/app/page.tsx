"use client";
import React, { useState } from 'react'

export default function Home() {
  const[search, setSearch] = useState("")
  const[image, setImage] = useState([])
  async function fetchImg(){
      try {
        const baseUrl = 'https://api.unsplash.com/search/photos'
      const response = await fetch(`${baseUrl}?page=1&query=${search}&client_id=DXp4_bQHFBQcOAASJi_n8DNlMX2pH1BdrSc1-Wf2VjE`)
      .then((res)=>res.json())
      if(response){
          console.log(response)
          setImage(response.results)
      }
      } catch (error) {
        alert("unable to show image")
        
      }
  }
  return (
    <div>
      <input type="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
      <button  onClick={fetchImg}>search image</button>
        <div>
          {image.map((img, index)=>(
            <div key={index}>
                 <img src={img.urls.small} />
            </div>
          ))}
        </div>
    </div>
  );
}
