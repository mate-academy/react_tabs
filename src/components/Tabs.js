import React from 'react';

import PropTypes from 'prop-types';

const Tabs = ({ children, currentTab, handleClick }) => (
  <>
    <div>
      {children.map(child => (
        <button
          type="button"
          key={child.props.id}
          onClick={() => handleClick(child.props.id)}
          className={(currentTab === child.props.id)
            ? 'button active'
            : 'button'}
        >
          {child.props.title}
        </button>
      ))}
    </div>
    <div className="content">
      {children[currentTab - 1]}
    </div>
  </>
);

Tabs.Tab = ({ children }) => <div>{children}</div>;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Tabs.Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Tabs;
