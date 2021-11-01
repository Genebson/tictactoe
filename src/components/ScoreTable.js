import './scoretable.css'
import PropTypes from 'prop-types';

export const ScoreTable = ({count}) => {
  return (
    <div className="scores">
      <div className="players">
        <span>Player (X)</span>
        <span>-</span>
        <span>Player (O)</span>
      </div>
      <div className="score-players">
        <span>{count.X}</span>
        <span>{count.tie}</span>
        <span>{count.O}</span>
      </div>
    </div>
  )
}

ScoreTable.propTypes = {
  count: PropTypes.objectOf(PropTypes.number)
}