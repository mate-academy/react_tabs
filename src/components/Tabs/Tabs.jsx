import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import Tab from '../Tab';

export class Tabs extends React.Component {
  state = {
    selectedTab: 'Tab 1',
  }

  onTabSelected = (event) => {
    const item = event.target.name;

    this.setState({
      selectedTab: item,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { tabs } = this.props;
    const findContent = tabs.find(tab => tab.title === selectedTab);

    return (
      <>
        {tabs.map(tab => (
          <Tab
            key={Math.random()}
            tabName={tab.title}
            tabTitle={tab.title}
            tabClicker={this.onTabSelected}
            tabClass={tab.title === selectedTab ? 'tab active' : 'tab'}
          />
        ))}
        <div>
          <p
            className="content"
          >
            {findContent.content}
          </p>
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
