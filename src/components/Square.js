import { useState } from 'react';
import PropTypes from 'prop-types';
import './square.css';

export const Square = ({value, onClick = () => {}, i }) => {
    return (
      <div className={'square square-' + i} onClick={onClick}>{value}</div>
    )
}

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', '']),
  onClick: PropTypes.func,
  i: PropTypes.number
}

export default Square;