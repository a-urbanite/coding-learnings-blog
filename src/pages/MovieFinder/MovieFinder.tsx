import React from 'react'

const MovieFinder = () => {
  return (
    <>
      <h1 className='title'>[JS/TS] MovieFinder</h1>
      <p>
        I wrote this app during the SALT bootcamp, around halfway through. 
        The task was to conceptualize and realize a simple MERN fullstack app in one day.
        A simple API mashup was recommended as an easy-to-implement structure but more than one API was expected.
      </p><br/>
      <img className='text-images' src='/images/mern-stack-large.png' alt='mern-stack'></img>
      <p>
        My idea was to write an app that would allow you to sort through the vast mountains 
        of movies in existence and help you choose a movie to watch this eve.
      </p><br/>
      <p>
        The MVP's architecture looked like this:
      </p>
      <ul>
        <li>
          a frontend based on React
        </li>
        <li>
          a backend based on NodeJS and ExpressJS 
        </li>
        <li>
          no database since the app only displays the response from the API. State is managed inside the App using hooks.
        </li>
        <li>
          automated deployment pipeline on a platform of our choice
        </li>
      </ul>
      <p>
        I called upon the OMDB database API to get lists of movies based on keywords, 
        this is what you get when you use the search function and browse through the results.
        When you click on a movie to read its details a second API runs in the background, this time to the IMDB database API.
        The reason why i used two different movie databse API`s is that OMDB does not provide as much movie details as IMDB and IMDB 
        does not provide movielists sorted after keywords.
      </p><br/>
      <p>
        Click on the image below to open the app (its hosted on Herou free tier so it might take a few seconds to load). 
      </p>
      <a href='https://fullstack-demo-movieapp.herokuapp.com/' target='_blank' rel="noreferrer">
        <img className='text-images' src='/images/movieFinder-front.png' alt='/movieFinder-front'></img>
      </a>

    </>
  )
}

export default MovieFinder