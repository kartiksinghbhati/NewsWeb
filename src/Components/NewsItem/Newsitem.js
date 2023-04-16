import React from 'react'
import styles from './NewsItem.module.css'

const Newsitem = (props) => {

    let {title, imageUrl, newsUrl, author, date} = props;
    return (
      <div className={styles.newsItem}>
        <div className={styles.newsItemImg}>
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":imageUrl} alt="..."/>
        </div>
        <div className="newsItemBody">
            <span className="newsItemCategory">category</span>
            <h5 className="newsItemTitle"><a href={newsUrl}>{title}....</a></h5>
            <p className="newsItemAuhtor">By {author?author:"Unknown"}</p>
            <p className="newsItemDate">{new Date(date).toGMTString()}</p>
        </div>
      </div>
    )
}

export default Newsitem

{/* <div className="card">
            <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}....</h5>
                <p className="card-text">{description}....</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div> */}
