import React from 'react'
import styles from "./css/homePage.module.css"

const homePage = () => {
  return (
    <>
        <div className={styles.intro}>
            <h1>Hi, I'm</h1>
        </div>
        <div className={styles.name}>
            <h1> Jeremiah William Sebastian</h1>
            <br/>
        </div>

        <div className={styles.role}>
            <h1>a full-Stack Developer</h1>
        </div>

        <div className={styles.description}>
            <p>Passionate and innovative Full Stack Developer dedicated to transforming complex </p>
            <br/>
            <p>ideas into seamless digital experiences. With a solid foundation in both front-end and</p>
            <br/>
            <p>back-end Development</p>
        </div>

        <div className= {styles.myPicture}>
            <img src = "../pictures/williamHomePage.png"/>
        </div>
    </>
  )
}

export default homePage
