import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends React.Component {
  state = {
    choosenTab: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      choosenTab: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { choosenTab } = this.state;

    return (
      <ul>
        <Tab
          tabs={tabs}
          choosenTab={choosenTab}
          onTabSelected={this.onTabSelected}
        />
      </ul>
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
