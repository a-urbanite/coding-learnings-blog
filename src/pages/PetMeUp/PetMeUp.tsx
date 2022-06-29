import React from 'react'

const PetMeUp = () => {
  return (
    <>
        <h2>Pet Me Up!</h2>
        <p>
          This App was our graduation project at the SALT Bootcamp. 
          It was written my me and my mob, Cristina Salazar, Ludwig Slettingdalen and Nemanja Dunic.
          </p><br/>
        <p>
          the goal was to showcase our ability to conceptualize, plan and execute the creation of a fullstack MERN application within the timeframe of 2 weeks.
          We learned a lot during this time. The most interesting challenge (to me) proved to be to continously
          adapt the time plan reacting to changes or wrong estimates in the implementation time of the various features.
        </p> <br/>
        <p>
          The basic concept of the app can be summarized in the tagline "Tinder for pets". 
          A platform where petowners can search for other petowners in their neighborhood and set a playdate.
          For the MVP we wanted to have a frontend that displays all registered pet profiles and allows to 
          contact the owner, nan externally hosted MongoDB database to store the profiles and a backend with 
          NodeJS and ExpressJS that sits in the middle and facilitates all the basic CRUD 
          operations (create, read, update, delete profiles). Another requirement for te MVP was to 
          integrate CI/CD principles with an automated deoployment pipeline linking the Git Repo to Heroku.
          For the MVP we needed around half a week.
        </p> <br/>
        <p>
          Once we had that in place it was time to flesh out the App and add some fun features. Those included:
        </p>
        <ul>
          <li>a map view to allow searching for profiles in a more visual and instinctive way</li>
          <li>enhanced the list view by a search functionality that allowed users to filter pets by categories 
          like zip code, age or gender</li>
          <li>integrated Firebase as a user management system</li>
          <li>designing the frontend with estalished standards of UI/UX and a more or less keen eye on aesthetics</li>
        </ul>
        <p>This took us about 1 week. The remaining half week we spent on bugfixing, refactoring and preparing the presentation.</p>

    </>
  )
}

export default PetMeUp