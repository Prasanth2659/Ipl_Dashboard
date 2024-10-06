// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatches: [],
    teamBannerUrl: null,
    isLoading: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonResponse = await response.json()
    const teamBannerUrl = jsonResponse.team_banner_url
    const latestMatchDetails = jsonResponse.latest_match_details
    const recentMatches = jsonResponse.recent_matches
    const updatedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatches = recentMatches.map(item => ({
      id: item.id,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      matchStatus: item.match_status,
      result: item.result,
    }))
    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
    } = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`s-page-bg ${id}`}>
        {isLoading ? (
          // eslint-disable-next-line
          <div testid="loader" className="loader-style">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <img
              className="banner-image-sizer"
              src={teamBannerUrl}
              alt="team banner"
            />
            <p className="latest-match-heading">Latest Matches</p>
            <LatestMatch matchDetails={latestMatchDetails} />
            <ul className="cards-container">
              {recentMatches.map(item => (
                <MatchCard key={item.id} matchDetails={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
