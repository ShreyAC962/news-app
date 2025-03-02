import React, { useEffect, useState } from 'react'
import "./Newsapp.css"
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("usa");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;



    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        setNewsData(jsonData.articles)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{   
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a>All News</a>
                <a >Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp