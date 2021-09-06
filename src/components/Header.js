import { NavLink } from 'react-router-dom'

// import ImgTrump from '../ImgTrump'
import img from '../assets/ImgTrump/trump5.png'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <img src={img} alt="Img of Donal Trump"></img>
  </header>
  )
}

export default Header;