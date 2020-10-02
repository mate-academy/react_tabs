import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tab = ({ tab, activeTab, index, onTabSelected }) => (
  <>
    <button
      type="button"
      className={classNames(
        'tab',
        { active: activeTab === index },
      )}
      key={tab.title}
      onClick={() => onTabSelected(index)}
    >
      {tab.title}
    </button>
  </>
);

Tab.propTypes = {
  tab: PropTypes.objectOf(PropTypes.any).isRequired,
  activeTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
