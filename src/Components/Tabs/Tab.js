import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Tab = ({ tab, activeTabId, selectTab }) => {
  const { id, title } = tab;
  const handleSelectTab = () => selectTab(id);
  const isSelected = (id === activeTabId);

  return (
    <li
      id={id}
      className={ClassNames(
        'tabs__item',
        { 'tabs__item--selected': isSelected },
      )}
    >
      <button
        type="button"
        className="tabs__button"
        onClick={() => selectTab(id)}
      >
        {title}
      </button>
    </li>
  );
};

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectTab: PropTypes.func.isRequired,
  activeTabId: PropTypes.number.isRequired,
};

export default Tab;
