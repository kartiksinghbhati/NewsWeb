import React from 'react'
import styles from './Header.module.css';
import headerimg from '../../Images/headerimg.webp';
// import Header1 from './Header1';
// import Header2 from './Header2';

const Header = (props) => {
  console.log(props.articles);
  return (
    <div  className={styles.header}>
        <div className={styles.header1}>
            <img className={styles.header1Img} src={props.articles[0].urlToImage} alt=""/>
            <span className={styles.header1Category}>{props.category}</span>
            <span className={styles.header1Title}>{props.articles[0].title?.slice(0, 42)}....</span>
        </div>
        <div className={styles.header2}>
            <div  className={styles.header21}>
                <img className={styles.header21Img} src={props.articles[1].urlToImage} alt=""/>
                <div  className={styles.header212}>
                    <span className={styles.header212Category}>{props.category}</span>
                    <span className={styles.header212Title}>{props.articles[1].title?.slice(0, 32)}....</span>
                </div>
            </div>
            <div  className={styles.header22}>
                <img className={styles.header22Img} src={props.articles[2].urlToImage} alt=""/>
                <div  className={styles.header222}>
                    <span className={styles.header222Category}>{props.category}</span>
                    <span className={styles.header222Title}>{props.articles[2].title?.slice(0, 32)}....</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header
