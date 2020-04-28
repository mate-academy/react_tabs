/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tab.css';

export const Tab = ({ title, index, isActive, selectTab }) => {
  const classCondition = classNames('tabs__item', {
    'active': isActive,
  });

  return (
    <div
      className={classCondition}
      onClick={() => selectTab(index)}
    >
      <p>
        {title}
      </p>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
