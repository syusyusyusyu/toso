import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <small>
                <div>
                    <a href="https://twitter.com/hiiraagii" target="_blank" rel="noreferrer">
                        <FaTwitter className={styles.icon} />
                    </a>
                </div>
            </small>
        </footer>
    );
};

export default Footer;