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
            <h1>a Full-Stack Developer</h1>
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

        <div className= {styles.socialMediaIcons}>
            <a href = "https://www.linkedin.com/in/jeremiah-william-sebastian-5ab68b117/" target='blank' rel='noopener noreferrer'>
                <div className= {styles.linkedinImg}>
                    <img src = "../pictures/linkedinLogo.png"/>
                </div>
            </a>
            
            <a href = "https://github.com/nervouswilliam" target='blank' rel='noopener noreferrer'>
                <div className= {styles.githubImg}>
                    <img src= "../pictures/githubLogo.png"/>
                </div>
            </a>

            <a href = "https://www.instagram.com/jeremiahwilliam27?igsh=MWpzdzFtNXprb3owNQ%3D%3D&utm_source=qr" target='blank' rel='noopener noreferrer'>
                <div className= {styles.instagramImg}>
                    <img src= "../pictures/instagramLogo.png"/>
                </div>
            </a>


        </div>
    </>
  )
}

export default homePage
