import React from 'react';
import PropTypes from 'prop-types';
import { TabPropTypes } from '../propTypes/TabPropTypes';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.PureComponent {
  state = {
    currentTab: this.props.tabs[this.props.index],
  }

  onTabSelected = (tab) => {
    this.setState({
      currentTab: tab,
    });
  }

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return (
      <>
        <ul>
          {
            tabs.map(tab => (
              <li key={tab.id}>
                <Tab handleClick={this.onTabSelected} tab={tab}>
                  {tab.content}
                </Tab>
              </li>
            ))
          }
        </ul>
        <p>
          {currentTab.content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(TabPropTypes).isRequired,
  ).isRequired,
  index: PropTypes.number,
};

Tabs.defaultProps = {
  index: 0,
};
