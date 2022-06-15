import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='pageWrapper'>
        <h1 className='profileTitle'>Alexander Städtler</h1>
        <img className='profilePic' src='gs://react-blog-30aa0.appspot.com/Bewerbungsfoto.JPG'></img>
        <div className='profileText'>
            Enthusiastic Fullstack Dev from Germany 
            with a pivot towards backend. My background in 
            archaeology has taught me a great deal about managing 
            projects and quality standards. As a process-oriented 
            professional, I care deeply about well-functioning 
            teams, clearly formulated goals and priorities, 
            as well as agile structures and strategies.
        </div>
    </div>
  )
}

export default Home