import {Component} from 'react'
import {Link} from 'react-router-dom'

import MeetingContext from '../../context/MeetingContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <MeetingContext.Consumer>
        {value => {
          const {name, topic} = value

          if (name !== '' && topic !== '') {
            return (
              <div>
                <div className="home-container">
                  <h1 style={{color: '#2563eb'}} className="meetup-heading">
                    Hello {name}
                  </h1>
                  <p className="meetup-description">Welcome To {topic}</p>

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="meetup"
                  />
                </div>
              </div>
            )
          }

          return (
            <div>
              <div className="home-container">
                <h1 className="meetup-heading">Welcome to Meetup</h1>
                <p className="meetup-description">
                  Please Register for the Topic
                </p>
                <Link to="/register">
                  <button className="register-button" type="button">
                    Register
                  </button>
                </Link>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup"
                />
              </div>
            </div>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default Home
