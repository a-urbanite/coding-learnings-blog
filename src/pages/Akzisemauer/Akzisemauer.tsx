// import { collection } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react'
// import { db, auth } from '../../firebase-config'
// import { doc, getDoc } from "firebase/firestore";
// import parse from 'html-react-parser'
import 'firebase/firestore';


const Akzisemauer = () => {

  return (
    <>
      <h1 className='title'> Akzisemauer Website</h1>
      <p>The Akzisemauer website is the centerpiece of an exhibtion project developed by the 
        Berlin-based collective&nbsp; 
        <a href='https://www.kollegenzweikommadrei.de/' target="_blank" rel="noreferrer">
          Kollegenzweikommadrei. 
        </a>&nbsp;It revolved around the eponymous&nbsp;
        <a href='https://de.wikipedia.org/wiki/Berliner_Zoll-_und_Akzisemauer' target="_blank" rel="noreferrer" >
          Akzisemauer
        </a>, one Berlin`s many citywalls, that has been in use between the mid-18th and the mid-19th century.`
      </p><br/>
      <p>
        It was my first freelance WebDev job. The pitch was to create an interactive map of the city wall, 
        bring it into the internet and build a nice website around it where complimentary photo collections 
        could be presented as well. Since it was intended (and never realised) that non-programmers would 
        continue to create and edit content on the page it was decided that we needed a content-management-system.
        I opted for the&nbsp;
        <a href='https://kinsta.com/blog/wordpress-statistics/' target="_blank" rel="noreferrer" >
          most widely used and loved Wordpress.
        </a>
        , also because i had experience with it from my day-job being Webmaster at the German Archaeological Institute 
        and managing their 
        <a href='https://www.dainst.blog/' target="_blank" rel="noreferrer">
          Wordpress Multisite Blog System.
        </a>
      </p><br/>
      <p>
        One could argue that setting up a Wordpress page barely counts as Web Development since it can be all done within the CMS' UI. 
        But the styling options that the Wordpress UI provides, bring you only so far. 
        If you have a visual concept that you want to realize you very quickly end up customizing the 
        template or that plugin's style files. A this point you not only need to understand HTML and CSS but also
        how the PHP-powered Wordpress works under the hood, at least roughly.
        Beside that, creating the interactive map alone took around 500 lines of code with Javascript, HTML and CSS 
        since i didnt host it anywhere else. The geodata is generated, processed and the map being rendered all in the browser.
      </p><br/>
      <p>
        As I said it was my first actual job as a Wed Dev and I am pretty happy how it turned out. Click on the image to check it out! 
      </p>  
      <a href='https://www.akzisemauer-berlin.de/' target="_blank" rel="noreferrer">
        <img src='/images/Akzisemauer_Plakat_V3.5_Digital_Druck.png' alt='Akzisemauer_poster' className='text-images'></img>
      </a>  
    </>
  )
}

export default Akzisemauer