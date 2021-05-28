import React from 'react';

import './App.css';
import { Tabs } from './Tabs';
import 'bulma/css/bulma.css';

/* eslint-disable */

const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et varius nunc. Mauris imperdiet odio mi, eu ultricies urna molestie quis. Maecenas vitae suscipit turpis. Nunc fringilla diam sed ipsum facilisis facilisis. Suspendisse maximus at mi dictum consequat. Curabitur elementum.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur lectus odio, a iaculis dui sodales nec. Duis in posuere lectus, non consequat dui. Pellentesque eu orci massa. Fusce mauris mauris, fermentum a tincidunt eu, tincidunt vel diam. Sed in.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius fringilla lobortis. In gravida feugiat suscipit. Suspendisse sit amet blandit augue. Aliquam pellentesque id ipsum in tempus. Donec lobortis venenatis ornare. Donec ultricies interdum dolor, ut tincidunt velit malesuada in.' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    tabs: tabsFromServer.map(tab => ({ ...tab })),
    selectedTab: tabsFromServer[0],
  }

  onTabSelected = (newTab) => {
    this.setState({ selectedTab: newTab });
  }

  render() {
    const { selectedTab, tabs } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-half box m-6">
          <h1 className="has-text-centered is-size-2 mb-5">
            Selected tab is:
            {' '}
            {selectedTab.title}
          </h1>

          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
            selectedTabId={selectedTab.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
