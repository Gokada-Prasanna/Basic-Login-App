// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {clickStatus: false}

  clickHandler = () => {
    this.setState(prevState => ({clickStatus: !prevState.clickStatus}))
  }

  getMessageText = () => {
    const {clickStatus} = this.state

    return clickStatus ? 'Welcome user' : 'Please Login'
  }

  render() {
    const messageText = this.getMessageText()

    const {clickStatus} = this.state

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <Message messageText={messageText} />
          {clickStatus ? (
            <Logout onClick={this.clickHandler} />
          ) : (
            <Login onClick={this.clickHandler} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
