import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './Tabs.scss';

export default class Tabs extends Component {
  state = {
    tabIndex: 0,
    tabs: this.props.children.map(child => ({
      ...child.props, content: child.props.children,
    })),
  }

  componentDidMount() {
    if (!this.props.index) {
      this.setState({
        tabIndex: 0,
      });
    } else {
      this.setState({
        tabIndex: this.props.index,
      });
    }

    if (!this.props.tabs) {
      this.setState({
        tabs: this.props.children.map(child => ({
          ...child.props, content: child.props.children,
        })),
      });
    } else {
      this.setState({
        tabs: this.props.tabs,
      });
    }
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
  tabs: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    onTabSelected: PropTypes.func,
    active: PropTypes.bool.isRequired,
  }),
  children: PropTypes.instanceOf(Object),
};

Tabs.defaultProps = {
  children: {},
  index: 0,
  tabs: undefined,
};
