import React from "react"
import styles from "./Footer.module.css"
import { FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <small>
            <div>
                <a href="https://twitter.com/OicItc" target="blank">
                    <FaTwitter className={styles.icon} />
                </a>
                <a href="https://github.com/ITCreate" target="blank">
                    <FaGithub className={styles.icon} />
                </a>
            </div>
            <p>
                &copy;2024 ITクリエイト部
                </p>
            </small>
        </footer>
    )
}

export default Footer;