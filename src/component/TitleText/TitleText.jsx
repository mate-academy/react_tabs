import React from 'react';
import PropTypes from 'prop-types';

import './TitleText.scss';

const TitleText = ({ title, content }) => (
  <div
    className={`${title}  show`}
  >
    <p>{content}</p>
  </div>
);

TitleText.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleText;
