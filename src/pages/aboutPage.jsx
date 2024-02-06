import React from 'react'
import styles from './css/aboutPage.module.css'

const aboutPage = () => {
  return (
    <>
      <div className= {styles.container}>
        <div className = {styles.header1}>
          <h1>About</h1>
        </div>

        <div className= {styles.header2}>
          <h1>Me</h1>
        </div>
      </div>
      <div className = {styles.topPage}>

        <div className= {styles.passion}>
          <div className= {styles.title1}>
            <h2>Developing</h2>
          </div>
          <div className= {styles.title2}>
            <h2>With</h2>
          </div>
          <div className= {styles.titleBlue}>
            <h2>Passion</h2>
          </div>

          <div className= {styles.contentPassion1}>
            <p>I love coding and developing</p>
            <br/>
            <p>websites as it gives me the freedom</p>
            <br/>
            <p>to code the projects in my own</p>
          </div>
          <div className= {styles.contentPassion2}>
            <p>vision</p>
          </div>
        </div>

        <div className= {styles.impact}>
          <div className= {styles.titleImpact}>
            <h2>Developing to </h2>
          </div>
          <div className= {styles.titleImpact2}>
            <h2>Create</h2>
          </div>
          <div className= {styles.titleImpactBlue}>
            <h2>Impact</h2>
          </div>

          <div className= {styles.contentImpact1}>
            <p>Projects that impacts people’s lives positively is</p>
            <br/>
            <p>why I am so passionate in coding. With just a</p>
            <br/>
            <p>few lines of code, I could create a</p>
          </div>
          <div className= {styles.contentImpact2}>
            <p>positive impact</p>
          </div>
          <div className= {styles.contentImpact3}>
            <p>in society.</p>
          </div>
        </div>

        <div className= {styles.londonImg}>
          <img src = "./pictures/londonWilliam.jpg"/>
        </div>
      </div>

      <div className= {styles.fluencyContainer}>
        <div className= {styles.titleRole}>
          <div className= {styles.titleFrontEnd}>
            <h2>Front-End</h2>
          </div>
          <div className= {styles.titleAnd}>
            <h2>and</h2>
          </div>
          <div className= {styles.titleBackEnd}>
            <h2>Back-End</h2>
          </div>
          <div className= {styles.titleFluency}>
            <h2>Fluency</h2>
          </div>
        </div>

        <div className= {styles.graphContainer}>
          <div className= {styles.blueBar}>
            <p>HTML</p>
          </div>
          <div className= {styles.whiteBar}>
          </div>
        </div>

        <div className= {styles.graphContainerCSS}>
          <div className= {styles.blueBarCSS}>
            <p>CSS</p>
          </div>
          <div className= {styles.whiteBarCSS}>
          </div>
        </div>

        <div className= {styles.graphContainerReact}>
         <div className= {styles.blueBarReact}>
            <p>ReactJS</p>
          </div>
          <div className= {styles.whiteBarReact}>
          </div>
        </div>

        <div className= {styles.graphContainerPHP}>
         <div className= {styles.blueBarPHP}>
            <p>PHP</p>
          </div>
          <div className= {styles.whiteBarPHP}>
          </div>
        </div>

        <div className= {styles.graphContainerAS}>
          <div className= {styles.blueBarAS}>
            <p>Android Studio(Java)</p>
          </div>
          <div className= {styles.whiteBarAS}>
          </div>
        </div>


        <div className= {styles.codingIcon}>
          <img src = "./pictures/codingIcon.png"/>
        </div>
      </div>

    </>

    
  )
}

export default aboutPage
