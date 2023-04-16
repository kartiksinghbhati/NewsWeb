import React from 'react'
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <div className={styles.navbar}>

      <div className={styles.navbar1}>
        <div className={styles.navbar1Left}>
          <Link className='link' to="/">kalTAK News</Link>
        </div>
        <div className={styles.navbar1Right}>       
          <i className={`${styles.navbar1Icons} fa-brands fa-youtube`}></i>
          <i className={`${styles.navbar1Icons} fa-brands fa-instagram`}></i>
          <i className={`${styles.navbar1Icons} fa-brands fa-twitter`}></i>
          <i className={`${styles.navbar1Icons} fa-brands fa-facebook`}></i>
        </div>
      </div>

      <div className={styles.navbar2}>
      <div className={styles.navbar2Center}>
        <ul className={styles.navbar2List}>
            <li className={styles.navbar2ListItems}><Link className="link" aria-current="page" to="/">Home</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/general">General</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/business">Business</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/entertainment">Entertainment</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/health">Health</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/science">Science</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/sports">Sports</Link></li>
            <li className={styles.navbar2ListItems}><Link className="link" to="/technology">Technology</Link></li>
        </ul>
      </div>
      </div>

    </div>
  )
}


<div className={styles.navbar}>
<div className={styles.navbarLeft}>
  <Link className='link' to="/">kalTAK</Link>
</div>
<div className={styles.navbarCenter}>
  <ul className={styles.navbarList}>
      <li className={styles.navbarListItems}><Link className="link" aria-current="page" to="/">Home</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/business">Business</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/entertainment">Entertainment</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/health">Health</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/science">Science</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/sports">Sports</Link></li>
      <li className={styles.navbarListItems}><Link className="link" to="/technology">Technology</Link></li>
  </ul>
</div>
<div className={styles.navbarRight}>       
  <i className={`${styles.navbarIcons} fa-brands fa-youtube`}></i>
  <i className={`${styles.navbarIcons} fa-brands fa-instagram`}></i>
  <i className={`${styles.navbarIcons} fa-brands fa-twitter`}></i>
  <i className={`${styles.navbarIcons} fa-brands fa-facebook`}></i>
</div>

</div>
export default Navbar
