// import { ReactComponent } from '*.svg';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabsList={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

const Tabs = ({ tabsList, selectedTab, onTabSelected }) => (
  <div className="Tabs">
    {tabsList.map(tab => (
      <div className="Tab">
        <button
          className={classNames('button', {
            active: selectedTab.id === tab.id,
          })}
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      </div>
    ))}
    <p>
      {tabs.find(tab => tab.id === selectedTab.id).content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default App;
