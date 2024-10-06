// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="lm-main-bg">
      <div className="section-1">
        <p>{competingTeam}</p>
        <p className="small-sub-headings">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="latest-match-img"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="section-2">
        <p className="small-sub-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="small-sub-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="small-sub-headings">Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p className="small-sub-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
