import React from "react";
import styles from"./MainImage.module.css"

const MainImage = () => {
    return(
        <section>
            <div className={styles.main_image}>
                <h1 className={styles.title}>
                <img src={process.env.PUBLIC_URL + '/images/logo1outline.png'} alt="Logo" />
                </h1>
                <div className={styles.pic_down}></div>
            </div>
        </section>
    )
}

export default MainImage