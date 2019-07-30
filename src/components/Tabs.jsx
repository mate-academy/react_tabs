import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, activeTabId, handleTabSelected }) => (
  <div className="Tabs">
    {tabs.map((tab, index) => (
      <button
        key={index + 1}
        type="button"
        className={classnames({
          Tabs__Tab: true,
          'Tabs__Tab--active': index === activeTabId,
        })}
        onClick={() => handleTabSelected(index)}
      >
        {tab.title}
      </button>
    ))}

  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  activeTabId: PropTypes.number.isRequired,
  handleTabSelected: PropTypes.func,
};

Tabs.defaultProps = {
  handleTabSelected: () => {},
};

export default Tabs;
