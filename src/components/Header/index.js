import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('hi')
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
          className="logo"
        />
      </Link>
    </div>
  )
}

export default Header
