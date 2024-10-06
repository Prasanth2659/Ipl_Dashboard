// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-para">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
