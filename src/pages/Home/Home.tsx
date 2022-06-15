import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='pageWrapper'>
        <h1 className='profileTitle'>Alexander Städtler</h1>
        <div className='profileBox'>
          <img className='profilePic' src='/Bewerbungsfoto.jpg' alt='profile pic'></img>
          <div className='profileText'>
            <p>
              Enthusiastic Fullstack Dev from Germany 
              with a pivot towards backend. My background in 
              archaeology has taught me a great deal about managing 
              projects and quality standards. As a process-oriented 
              professional, I care deeply about well-functioning 
              teams, clearly formulated goals and priorities, 
              as well as agile structures and strategies.
            </p>
          </div>
        </div>
        <div className='CV'>
          <p>
                      EDUCATION & TRAINING

              Full Stack JavaScript - School of Applied Technology 
              Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning.

              Prehistoric Archaeology B.A. + M.A. - Freie Universitat Berlin
              October 2009 - November 2018 Erasmus in Rome in 2013

              Applied Computer Science B.Sc. - HTW Berlin
              April 2015 - November 2015 - unfinished

              Cultural Heritage Management Assistent
              October 2008 - September 2009


              WORK EXPERIENCE
              Webmaster - Deutsches Archaologisches Institut
              April 2020 - December 2021 - Berlin, Germany
              Technical Management of PR Infrastructure including Wordpress and Liferay CMS, Atlassian stack

              Heritage Consultant - Artefact Pty Ltd.
              February 2019 - June 2019 - Sydney, NSW Australia Supervising	construction	works	from	an archaeological perspective

              Research Assistant - Deutsches Archaologisches Institut, Freie Universitat Berlin
              March 2012 - September 2018
              A sequence of employments with archaeological institutes and projects. Activities spanned from office work in Berlin to Field Work in Saudi Arabia, mostly revolving around Geodata and Research Data Management.

          </p>

        </div>
    </div>
  )
}

export default Home