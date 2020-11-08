import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ tab, index, ChangeTabIndex, TabIndex }) => (
  <button
    key={tab.title}
    type="button"
    className={
      classNames('tab', { 'tab--active': index === TabIndex })
    }
    onClick={() => {
      ChangeTabIndex(index);
    }}
  >
    {tab.title}
  </button>
);

Button.propTypes = {
  tab: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  ChangeTabIndex: PropTypes.func.isRequired,
  TabIndex: PropTypes.number.isRequired,
};
