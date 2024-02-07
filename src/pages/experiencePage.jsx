import React from 'react';
import styles from './css/experiencePage.module.css';

const experiencePage = () => {
  return (
    <>
      <div className= {styles.portfolioTitle}>
        <div className= {styles.title1}>
          <h1>My</h1>
        </div>
        <div className= {styles.title2}>
          <h1>Experiences</h1>
        </div>
      </div>

      <div className= {styles.experience1}>
        <div className= {styles.experienceBackground}>
          <div className= {styles.date}>
            <p>Sep 2021 - Feb 2022</p>
          </div>
          <div className= {styles.role}>
            <h2>Front-End Developer</h2>
          </div>
          <div className= {styles.language}>
            <h2>HTML, CSS, Javascript</h2>
          </div>
          <div className= {styles.description}>
            <p>Collaborated and design an E-</p>
            <p>Commerce Platform</p>
            <br/>
            <p>Tasks:</p>
            <p>- Front-End Development Using HTML and CSS</p>
            <p>- Data Collection Using simple Javascript</p>
          </div>
        </div>

        <div className= {styles.experienceBackground2}>
          <div className= {styles.date2}>
            <p>May 2023 - Jul 2023</p>
          </div>
          <div className= {styles.role2}>
            <h2>Back-End Developer</h2>
          </div>
          <div className= {styles.language2}>
            <h2>Laravel(PHP) and MySQL</h2>
          </div>
          <div className= {styles.description2}>
            <p>Collaborated to create a website dedicated to help small businesses track their stock of products</p>
            <br/>
            <p>Tasks:</p>
            <p>- Back-End Development using Laravel</p>
            <p>- Developed Login/Logout Feature</p>
            <p>- Developed Registration Feature</p>
            <p>- Developed Password Authentication</p>
          </div>
        </div>
      </div>

      <div className= {styles.experience2}>
        <div className= {styles.experienceBackground3}>
          <div className= {styles.date3}>
            <p>Sep 2023 - Jan 2024</p>
          </div>
          <div className= {styles.role3}>
            <h2>Android Developer</h2>
          </div>
          <div className= {styles.language3}>
            <h2>Android Studio (Java)</h2>
          </div>
          <div className= {styles.description3}>
            <p>Designed and Implemented Application called ”CesTwoSkin”</p>
            <br/>
            <p>Tasks:</p>
            <p>- Designed and Implemented Landing Page</p>
            <p>- Designed and Implemented Database using SQLite</p>
            <p>- Designed and Implemented Add Order Page</p>
          </div>
        </div>

        <div className= {styles.experienceBackground4}>
          <div className= {styles.date4}>
            <p>Feb 2024 - Feb 2025</p>
          </div>
          <div className= {styles.role4}>
            <h2>Application Developer</h2>
          </div>
          <div className= {styles.language4}>
            <h2>Unknowned</h2>
          </div>
          <div className= {styles.description4}>
            <p>Unknowned</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default experiencePage
