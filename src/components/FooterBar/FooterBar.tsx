import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footerBar.css'


const FooterBar = () => {
  const navigate = useNavigate()
  return (
    <div className='FooterBar'>
        <span className='mainNav__link' onClick={() => navigate('/impressum')}>
          Impressum
        </span>
    </div>
  )
}

export default FooterBar