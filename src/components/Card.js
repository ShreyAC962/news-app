import React from 'react'
import './Card.css'

const Card = ({data}) => {
     console.log(data);

     
  return (
    <div className='cardContainer'>
    {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
            return null
        }else{
            return(
            <div className='card'>
                <img src={curItem.urlToImage}/>
                <div className='cardContent'>
                    <a onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button className='btn' onClick={()=>window.open(curItem.url)}>Read More</button>
                </div>
            </div>
        )
        }
         
    })}
    </div>
  )
}

export default Card