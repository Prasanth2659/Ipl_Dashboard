// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const nameForClass = matchStatus === 'Won' ? 'won-style' : 'loss-style'
  console.log(result)
  return (
    <li className="mc-bg">
      <img
        className="card-image-style"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${nameForClass}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
