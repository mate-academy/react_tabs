import React from 'react';
import PropTypes from 'prop-types';
import './TitleButton.scss';

const TitleButton = ({ id, title, getIdChoosedTitle, isActiveTabId }) => (
  <button
    className={isActiveTabId === id ? `${title} show btn` : 'btn'}
    type="button"
    id={id}
    onClick={event => getIdChoosedTitle(event.target.id)}
  >
    {title}
  </button>
);

TitleButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  getIdChoosedTitle: PropTypes.func.isRequired,
  isActiveTabId: PropTypes.string.isRequired,
};

export default TitleButton;
