import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import styles from './Home.module.css'
import Main from '../Main/Main'
import Spinner from '../Spinner'

const Home = (props) => {

    const [articles, setArticles] = useState([])
    const [top3, setTop3] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;

        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }


    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])


  return (
    <>
    {loading ? <Spinner/> :
        <div className='home'>
            <Header articles={articles} category={props.category}/>
            <Main articles={articles}/>
        </div>
    }
    </>
  )
}

export default Home


