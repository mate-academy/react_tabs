import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './Tabs.scss';

export default class Tabs extends Component {
  state = {
    tabIndex: this.props.index || 0,
    tabs: this.props.tabs || this.props.children.map(child => ({
      ...child.props, content: child.props.children,
    })),
  }

  onTabSelected = (i) => {
    this.setState(() => ({
      tabIndex: i,
    }));
  }

  render() {
    return (
      <>
        <ul className="tabs" activeIndex={this.state.tabIndex}>
          {this.state.tabs.map((tab, i) => (
            <li
              key={tab.title}
              className="tabs__tab"
            >
              <Tab
                title={tab.title}
                active={this.state.tabIndex === i}
                onTabSelected={() => this.onTabSelected(i)}
              >
                {this.state.tabs[this.state.tabIndex].content}
              </Tab>
            </li>
          ))}
        </ul>

        <div>
          {this.state.tabs[this.state.tabIndex].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  index: PropTypes.number,
  tabs: PropTypes.instanceOf(Array),
  children: PropTypes.instanceOf(Object),
};

Tabs.defaultProps = {
  children: {},
  index: 0,
  tabs: undefined,
};
