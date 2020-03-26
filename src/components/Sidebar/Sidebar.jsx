import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
 <p className={styles.sidebarText}>Menu</p>
        <div className={styles.sidebar}>
            <ul>
                <Link to="/orders" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (16).svg" alt="" />
                    <li>My orders</li>
                </Link>
                <Link to="/return" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (17).svg" alt="" />
                    <li>Return</li>
                </Link>
                <Link to="/inform" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (18).svg" alt="" />
                    <li>My Information</li>
                </Link>
                <Link to="/changepass" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (19).svg" alt="" />
                    <li>Change Password</li>
                </Link>
                <Link to="/feedback" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (20).svg" alt="" />
                    <li>Share Feedback</li>
                </Link>
                <Link to="/help" className={styles.sidebarItem}>
                    <img src="images/svg/Vector (21).svg" alt="" />
                    <li>Help & Contact</li>
                </Link>

            </ul>
        </div>
        </div>
    )
}

export default Sidebar