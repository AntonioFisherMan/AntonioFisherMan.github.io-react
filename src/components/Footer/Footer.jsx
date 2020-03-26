import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

const Footer=()=>{
  return(
      <div>
<footer className="footer">
    <section>
        <div className="container">
            <hr style={{border:'0.5px solid #111111 !important'}}/>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                    <div className={styles.footerItem}>
                        <p>Help</p>
                       <Link to="/">
                            <li>How it Works</li>
                        </Link>
                       <Link to="/">
                            <li>FAQs</li>
                        </Link>
                       <Link to="/">
                            <li>Size Charts</li>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                    <div className={styles.footerItem}>
                        <p>About Us</p>
                       <Link to="/">
                            <li>About Dress IT Box</li>
                        </Link>
                       <Link to="/">
                            <li>Privacy & Cookie Policy</li>
                        </Link>
                       <Link to="/">
                            <li>Terms & Conditions</li>
                        </Link>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column align-items-center col-sm-6 col-lg-3">
                    <div  className={styles.footerItem}>
                        <p>Quick Links</p>
                       <Link to="/">
                            <li>Blog</li>
                        </Link>
                       <Link to="/">
                            <li>Refer a friend</li>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className={styles.footerItem}>
                        <p className={styles.span}> Subscribe at <span>get 10% off</span> your first rental</p>
                        <div className={styles.footerForm}>
                            <input placeholder="Your email"/>
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={styles.footerBottom}>
        <div className="container">
            <div className="row">
            <div className="col-1"></div>
                <div className="col-11">
                   <p>© 2020 dressitbox.com</p>
                </div>
            </div>
        </div>
    </section>
</footer>
      </div>
    
  )
}

export default Footer