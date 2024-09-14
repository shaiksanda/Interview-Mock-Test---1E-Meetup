import Header from '../Header'
import './index.css'

const NotFound = () => {
  console.log('hi')
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
          alt="not found"
          className="not-found-image"
        />
        <h1 style={{color: '#ff0b37'}}>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found.</p>
      </div>
    </div>
  )
}

export default NotFound
