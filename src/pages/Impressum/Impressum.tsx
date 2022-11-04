import React from 'react'
import './impressum.css'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineHome } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { SiMaildotru } from 'react-icons/si'

const Impressum = () => {
  return (
    <div className='page pageFrame'>
      <div className='impressumContainer'>
        <h2>Impressum</h2><br/>
        <p>This website is provided by:</p><br/>
        <p><IoPersonOutline/> Alexander Städtler</p>
        <p><HiOutlineHome/> Hüttenroder Weg 5-9, 12059 Berlin</p>
        <p><FiPhone/> 017687848469</p>
        <p><SiMaildotru/> staedtler.alexander@gmail.com</p>
      </div>
    </div>
  )
}

export default Impressum