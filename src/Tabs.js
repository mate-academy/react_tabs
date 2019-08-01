import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Tab = ({
  title,
  activeTabIndex,
  onTabSelected,
  tabIndex,
}) => (

  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
  <div
    className="tab"
    onClick={() => onTabSelected(tabIndex)}
  >
    <div
      className={tabIndex === activeTabIndex
        ? 'tab__title tab__title--active'
        : 'tab__title'}
    >
      {title}
    </div>
  </div>
);

class Tabs extends React.Component {
  static Tab = Tab;

  render() {
    const { activeTabIndex, children } = this.props;

    return (
      <div className="tabs">
        <div className="tabs__name">{children}</div>
        <div className="tabs__content">
          <div className="tab__content">
            {children[activeTabIndex].props.children}
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabIndex: PropTypes.number.isRequired,
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
