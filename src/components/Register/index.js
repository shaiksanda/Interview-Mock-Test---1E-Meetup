import {Component} from 'react'

import MeetingContext from '../../context/MeetingContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showError: false, error: ''}

  handleError = () => {
    this.setState({showError: true, error: 'Please enter your name'})
  }

  render() {
    return (
      <MeetingContext.Consumer>
        {value => {
          const {name, topic, setName, setTopic} = value
          console.log(name, topic)

          const {showError, error} = this.state

          const handleName = event => {
            setName(event.target.value)
          }

          const handleTopic = event => {
            setTopic(event.target.value)
          }

          const handleSubmit = event => {
            event.preventDefault()
            const {history} = this.props
            if (name === '') {
              return this.handleError()
            }
            return history.replace('/')
          }

          return (
            <div>
              <div className="register-container">
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                    className="image"
                  />
                </div>
                <form onSubmit={handleSubmit} className="input-container">
                  <h1 className="meetup-heading">Let Us join</h1>
                  <label htmlFor="name" className="label">
                    NAME
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    className="input"
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                  <label htmlFor="topics" className="label">
                    Topics
                  </label>
                  <select
                    value={topic}
                    onChange={handleTopic}
                    id="topics"
                    className="input"
                  >
                    {topicsList.map(each => (
                      <option value={each.displayText} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>

                  <button
                    style={{marginTop: '20px'}}
                    className="register-button"
                    type="submit"
                  >
                    Register Now
                  </button>
                  {showError && (
                    <p
                      style={{
                        margin: '0',
                        color: '#ff0b37',
                        fontWeight: 'bold',
                        fontSize: '18px',
                      }}
                    >
                      {error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default Register
