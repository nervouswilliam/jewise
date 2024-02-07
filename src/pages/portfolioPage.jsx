import React from 'react';
import styles from './css/portfolioPage.module.css';

const portfolioPage = () => {
  return (
    <>
      <div className= {styles.titlePortfolio}>
        <div className= {styles.title1}>
          <h1>Port</h1>
        </div>
        <div className= {styles.title2}>
          <h1>folio</h1>
        </div>
      </div>

      <div className= {styles.openingPhrase}>
        <p>What Service You Will Get From Me</p>
      </div>

      <div className= {styles.merciBigPic}>
        <img src='../pictures/merciBigPic.png'/>
      </div>
      
      <div className= {styles.smallPicContainer}>
        <div className= {styles.smallPic1}>
          <img src='../pictures/merciSmallPic1.png'/>
        </div>
        <div className= {styles.smallPic2}>
          <img src='../pictures/merciSmallPic2.png'/>
        </div>
      </div>

      <div className= {styles.smallPicContainer2}>
        <div className= {styles.smallPic3}>
          <img src='../pictures/merciSmallPic3.png'/>
        </div>
        <div className= {styles.smallPic4}>
          <img src='../pictures/merciSmallPic4.png'/>
        </div>
      </div>

      <div className= {styles.vorskinsBigPic}>
        <img src='../pictures/vorskinBigPic.png'/>
      </div>

      <div className= {styles.vorskinsSmallPicContainer}>
        <div className= {styles.vorskinsSmallPic1}>
          <img src='../pictures/vorskinSmallPic1.png'/>
        </div>
        <div className= {styles.vorskinsSmallPic2}>
          <img src='../pictures/vorskinSmallPic2.png'/>
        </div>
      </div>
    </>
  )
}

export default portfolioPage

