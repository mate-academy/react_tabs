import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Tab = ({
  tab,
  id,
  onTabSelected,
  selectedTab,
}) => (
  <li className="tab">
    <h2
      className={classnames('tab__title', {
        selected: selectedTab === tab.title,
      })}
      onClick={() => onTabSelected(id)}
    >
      {tab.title}
    </h2>
    {selectedTab === id
      ? (
        <p className="tab__content">
          {tab.content}
        </p>
      ) : ''
    }
  </li>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
};

export default Tab;
