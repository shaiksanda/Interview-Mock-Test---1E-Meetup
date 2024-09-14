import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MeetingContext from './context/MeetingContext'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

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

class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
  }

  setName = name => {
    this.setState({name})
  }

  setTopic = topic => {
    this.setState({topic})
  }

  render() {
    const {name, topic} = this.state

    return (
      <MeetingContext.Provider
        value={{
          name,
          topic,
          setName: this.setName,
          setTopic: this.setTopic,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetingContext.Provider>
    )
  }
}

export default App
