import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Tab({ title, index, selectTab, isActive }) {
  const classCondition = classNames('tabs__button', {
    'tabs__button--active': isActive,
  });

  return (
    <button
      type="button"
      className={classCondition}
      onClick={() => {
        selectTab(index);
      }}
    >
      {title}
    </button>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
