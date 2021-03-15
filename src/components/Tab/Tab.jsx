import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import classNames from 'classnames';

export function Tab({
  selectedTab,
  title,
  id,
  onClickTab,
}) {
  const isEqual = (id === selectedTab);

  return (
    <li className="Tab__item">
      <button
        type="button"
        className={classNames(
          'Tab__button', { Tab__button_active: isEqual },
        )}
        onClick={() => onClickTab(id)}
      >
        {title}
      </button>
    </li>
  );
}

Tab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
};

Tab.defaultProps = {
  title: '',
  selectedTab: '',
};
