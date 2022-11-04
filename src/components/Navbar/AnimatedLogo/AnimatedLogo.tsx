import React from 'react'
import { useNavigate } from 'react-router-dom'
import './animatedLogo.css'

const AnimatedLogo = () => {
  const navigate = useNavigate()

  return (
    <div className="logoContainer" onClick={() => navigate('/')}>
        <span className="spanA">a-urbanite`s</span>
        <span className="spanB">/coding_blog//</span>
    </div>
  )
}

export default AnimatedLogo