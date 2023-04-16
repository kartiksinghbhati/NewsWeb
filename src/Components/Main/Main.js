import React from 'react'
import Newsitem from '../NewsItem/Newsitem'
import './Main.css'

const Main = (props) => {



  return (
    
    <div className='main'>

        <div className='mainTitle'>
            <span className="mainTitle1">Top Headlines</span>
            <span className="mainTitle2">See ALL</span>
        </div>
        

        <div className="container">
            <div className="row">
                {props.articles.map((element) =>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?.slice(0, 60)} description={element.description?.slice(0, 90)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default Main
