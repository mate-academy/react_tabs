import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import classNames from 'classnames';

export function Tab(props) {
  const { selectedTab, title, id, onClickTab, selectedTabId } = props;
  const isEqual = title === selectedTab || id === selectedTabId;

  return (
    <li className="Tab__item">
      <button
        type="button"
        className={classNames(
          'Tab__button', { Tab__button_active: isEqual },
        )}
        onClick={() => onClickTab(title, id)}
      >
        {title || id}
      </button>
    </li>
  );
}

Tab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
};

Tab.defaultProps = {
  title: '',
  selectedTab: '',
};
