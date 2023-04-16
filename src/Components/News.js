import React, { useEffect, useState } from 'react'
import styles from "./News.module.css";
import Newsitem from './NewsItem/Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

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


    const fetchMoreData = async ()=> {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <div className={styles.News}>
                <h2>kalTak News - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                
                {loading && <Spinner/>}
                
                <InfiniteScroll 
                    dataLength={articles.length} 
                    next={fetchMoreData} 
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >

                    <div className="container">
                        <div className="row">
                            {articles.map((element) =>{
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title?.slice(0, 60)} description={element.description?.slice(0, 90)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </div>
        </>
    )
}

export default News


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
