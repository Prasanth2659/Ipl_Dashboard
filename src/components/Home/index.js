// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonResponse = await response.json()
    const updatedResponse = jsonResponse.teams.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamDetails: updatedResponse, isLoading: false})
  }

  render() {
    const {isLoading, teamDetails} = this.state
    return (
      <div className="page-bg">
        {isLoading ? (
          // eslint-disable-next-line
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="logo-section">
              <img
                className="logo-sizer"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="logo-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-cards-container">
              {teamDetails.map(item => (
                <TeamCard key={item.id} item={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
