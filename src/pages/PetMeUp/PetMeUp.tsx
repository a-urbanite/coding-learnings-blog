import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import './PetMeUp.css'

const PetMeUp = () => {
  return (
    <>
        <h1 className='title'>Pet Me Up!</h1>
        <p>
          This App was our graduation project at the SALT Bootcamp. 
          It was written by Cristina Salazar, Ludwig Slettingdalen Nemanja Dunic and me. We were team MultySalty!
          </p><br/>
        <div className='teamSection'>

          <div className='about__saltie'>
            <img className='saltie-img' src="/images/teamPhotos/cristina.png" alt='Cristina'/>
            <p className='saltie-name'>Cristina Salazar</p>
            <div className="saltie-links">
              <a className='saltie__icon' href='https://github.com/a-poco' target='blank'><FaGithubSquare /></a>
              <a className='saltie__icon' href='https://www.linkedin.com/in/cristinasalazarmunguia/' target='blank'><FaLinkedin/></a>
            </div>
          </div>

          <div className='about__saltie'>
            <img className='saltie-img' src='/images/teamPhotos/alexander.png' alt="Alex" />
            <p className='saltie-name'>Alexander Städtler</p>
            <div className="saltie-links">
              <a className='saltie__icon' href='https://github.com/a-urbanite' target='blank'><FaGithubSquare /></a>
              <a className='saltie__icon' href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin/></a>
            </div>
          </div>

          <div className='about__saltie'>
            <img className='saltie-img' src='/images/teamPhotos/Ludwig.png' alt="Ludwig" />
            <p className='saltie-name'>Ludwig Slettingdalen</p>
            <div className="saltie-links">
              <a className='saltie__icon' href='https://github.com/406322' target='blank'><FaGithubSquare /></a>
              <a className='saltie__icon' href='https://www.linkedin.com/in/ludwig-slettingdalen/' target='blank'><FaLinkedin/></a>
            </div>
          </div>

          <div className='about__saltie'>
            <img className='saltie-img' src='/images/teamPhotos/Nemanja.png' alt="Nemanja" />
            <p className='saltie-name'>Nemanja Dunic</p>
            <div className="saltie-links">
              <a className='saltie__icon' href='https://github.com/dunicn' target='blank'><FaGithubSquare /></a>
              <a className='saltie__icon' href='https://www.linkedin.com/in/nemanjadunic/' target='blank'><FaLinkedin/></a>
            </div>
          </div>

        </div>
        <p>
          the goal was to showcase our ability to conceptualize, plan and execute the creation of a fullstack MERN application within the timeframe of 2 weeks.
          We learned a lot during this time. 
        </p> <br/>
        <p>
          The basic concept of the app can be summarized in the tagline "Tinder for pets". 
          A platform where petowners can search for other petowners in their neighborhood and set a playdate.
          For the MVP we wanted to have:
        </p> 
        <ul>
          <li>a frontend that displays all registered pet profiles and allows to 
          contact the owner</li>
          <li>an externally hosted MongoDB database to store the profiles</li>
          <li>and a backend with 
          NodeJS and ExpressJS that sits in the middle and facilitates all the basic CRUD 
          operations (create, read, update, delete profiles)</li>
          <li>a basic layout following the mobile-first principle</li>
          <li>to integrate CI/CD principles with an automated deoployment pipeline linking the Git Repo to Heroku</li>
        </ul>
        <p>
          For the MVP we needed around half a week. We learned that proper planning is key to success.
        </p>
        <img className='text-images' src='/images/petmeUp_miroBoard.png' alt='petmeUp_miroBoard'/>
        <p>
          Once we had that in place it was time to flesh out the App and add some fun features, like:
        </p>
        <ul>
          <li>a map view to allow searching for profiles in a more visual and instinctive way</li>
          <li>enhanced the list view by a search functionality that allowed users to filter pets by categories 
          like zip code, age or gender</li>
          <li>integrated Firebase as a user management system</li>
          <li>designing the frontend with estalished standards of UI/UX and a more or less keen eye on aesthetics</li>
        </ul>
        <p>This took us about 1 week. The remaining half week we spent on bugfixing, refactoring and preparing the presentation. At the end out architexture looked like this:</p>
        <img className='text-images' src='/images/petMeUp_architecture.png' alt='petMeUp_architecture'/>
        <p>During this second phase the most interesting challenge (to me) proved to be to continously
          adapt the time plan reacting to changes or wrong estimates in the implementation time of the various features. 
          And here is the finished product (click on the logo)(its Heroku free tier, so it might take a fes sec to load):</p>
        <a href='https://ancient-basin-65065.herokuapp.com/' target='_blank' rel="noreferrer">
          <img className='text-images' src='/images/petMeUp_logo.png' alt='petMeUp_logo'/>
        </a>
    </>
  )
}

export default PetMeUp