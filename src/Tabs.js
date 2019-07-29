import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
  static Tab = Tab;

  render() {
    const { index, children } = this.props;

    return (
      <div className="tabs">
        <div className="tabs__name">{children}</div>
        <div className="tabs__content">
          <div className="tab__content">
            {children.map((child, i) => (
              i === index ? child.props.children : null
            ))}
          </div>
        </div>

      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Tabs;
