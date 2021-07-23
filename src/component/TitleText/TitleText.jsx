import React from 'react';
import PropTypes from 'prop-types';
import './TitleText.scss';

const TitleText = ({ selectedTab }) => (
  <div
    className="titleText"
  >
    {selectedTab.content}
  </div>
);

export default TitleText;

TitleText.propTypes = {
  selectedTab: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
