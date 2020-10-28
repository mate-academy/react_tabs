/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { tabShape } from '../shapes/TabShape';

export class Tabs extends React.PureComponent {
  state = {
    active: this.props.index,
    content: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (chosen, child) => {
    this.setState({
      active: chosen,
      content: child,
    });
  }

  render() {
    const { tabs } = this.props;
    const { active, content } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <Tab
                callback={this.onTabSelected}
                tab={tab}
                stateActive={active}
              >
                {/* <div> */}
                {tab.content}
                {/* </div> */}
              </Tab>
            </li>
          ))}
        </ul>

        <div>
          {content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    tabShape.isRequired,
  ).isRequired,
  index: PropTypes.number.isRequired,
};
