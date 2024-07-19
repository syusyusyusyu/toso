import React from "react";
import "./Card.css";
import InViewMonitor from "react-inview-monitor";

const Card = (props) => {
    return (
        <section className="contents">
            <div className="inner">
                <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInLeft slower'>
                    <img src={props.imagePath} alt={props.title} className="img" />
                </InViewMonitor>
                <div className="description">
                    <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                        <h1 className="title">{props.title}</h1>
                    </InViewMonitor>
                    <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                        <p className="text">{props.description}</p>
                    </InViewMonitor>
                </div>
            </div>
        </section>
    );
};

export default Card;

