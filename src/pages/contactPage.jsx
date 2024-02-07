import React from 'react';
import styles from './css/contactPage.module.css'

const contactPage = () => {
  return (
    <>
      <div className= {styles.contactTitle}>
        <div className= {styles.title1}>
          <h1>Con</h1>
        </div>
        <div className= {styles.title2}>
          <h1>tact</h1>
        </div>
      </div>

      <div className= {styles.contactMethods}>
        <div className= {styles.phoneContainer}>
          <img src = "../pictures/phoneIcon.png"/>
          <div className= {styles.phoneNumber}>
            <h2>+62 813 1658 9191</h2>
          </div>
          <div className= {styles.dateContact}>
            <p>Monday - Friday 9AM - 5PM</p>
          </div>
        </div>

        <div className= {styles.houseContainer}>
          <img src = "../pictures/houseIcon.png"/>
          <div className= {styles.houseLocation}>
            <h2>Jakarta, Indonesia</h2>
          </div>
          <div className= {styles.specificLocation}>
            <p>South Tangerang, Indonesia, 15310</p>
          </div>
        </div>

        <div className= {styles.emailContainer}>
          <img src = "../pictures/emailLogo.png"/>
          <div className= {styles.email}>
            <h2>jeremiah.wsebastian@gmail.com</h2>
          </div>
          <div className= {styles.contactMe}>
            <p>Contact Me Anytime</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default contactPage
