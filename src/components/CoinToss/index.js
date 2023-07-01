// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headImage: headsUrl,
    headCount: 0,
    tailCount: 0,
  }

  onTossResult = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let coinImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (tossResult === 0) {
      coinImage = headsUrl
      latestHeadCount += 1
    } else {
      coinImage = tailsUrl
      latestTailCount += 1
    }
    this.setState({
      headImage: coinImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {headImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="coin">Heads (or) Tails</p>
          <img className="image" src={headImage} alt="toss result" />
          <button className="button" type="button" onClick={this.onTossResult}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {totalCount}</p>
            <p className="heads">Heads: {headCount}</p>
            <p className="tails">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
