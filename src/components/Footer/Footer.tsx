import React from "react"
import styles from "./Footer.module.css"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <small>
            <div>
                <a href="https://twitter.com/hiiraagii" target="blank">
                    <FaTwitter className={styles.icon} />
                </a>
            </div>
            <p>
                &copy;2024 Shu Yoshida 
                </p>
            </small>
        </footer>
    )
}

export default Footer;