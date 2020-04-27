import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, activeTabId, selectTab }) => {
  const { id, title } = tab;
  const handleSelectTab = () => selectTab(id);
  let itemClass = 'tabs__item';

  if (id === activeTabId) {
    itemClass += ' tabs__item--selected';
  }

  return (
    <li id={id} className={itemClass}>
      <button
        type="button"
        className="tabs__button"
        onClick={handleSelectTab}
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
