import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends React.Component {
  state = {
    choosenTab: this.props.tabs[0],
    tabsList: this.props.tabs,
  };

  onTabSelected = (tab) => {
    this.setState({
      choosenTab: tab,
    });
  };

  render() {
    const { choosenTab, tabsList } = this.state;

    return (
      <div>
        <ul>
          <Tab
            tabs={tabsList}
            onTabSelected={this.onTabSelected}
          />
        </ul>
        <div className="ui content">
          {choosenTab.content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
