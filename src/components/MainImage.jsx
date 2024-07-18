import React from "react";
import styles from "./MainImage.module.css";
import InViewMonitor from "react-inview-monitor";

const MainImage = () => {
    return (
        <section>
            <div className={styles.main_image}>
            <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                <h1 className={styles.title}>
                    <p style={{textAlign:'left'}}>
                        名前：吉田 柊（よしだ しゅう）<br />
                        年齢：22歳（専門学生）<br />
                        出身：奈良県
                    </p>
                </h1>
            </InViewMonitor>
            </div>
        </section>
    );
}

export default MainImage;