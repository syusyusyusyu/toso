import React from "react";
import styles from "./MainImage.css";

const MainImage = () => {
    return (
        <section>
            <div className={styles.main_image}>
                <h1 className={styles.title}>
                    <p style={{textAlign:'left'}}>
                        名前：吉田 柊（よしだ しゅう）<br />
                        年齢：22歳（専門学生）<br />
                        出身：奈良県
                    </p>
                </h1>
                <div className={styles.pic_down}></div>
            </div>
        </section>
    );
}

export default MainImage;