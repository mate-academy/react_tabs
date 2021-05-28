import React from 'react';

import './App.css';
import { Tabs } from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et varius nunc. Mauris imperdiet odio mi, eu ultricies urna molestie quis. Maecenas vitae suscipit turpis. Nunc fringilla diam sed ipsum facilisis facilisis. Suspendisse maximus at mi dictum consequat. Curabitur elementum.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur lectus odio, a iaculis dui sodales nec. Duis in posuere lectus, non consequat dui. Pellentesque eu orci massa. Fusce mauris mauris, fermentum a tincidunt eu, tincidunt vel diam. Sed in.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius fringilla lobortis. In gravida feugiat suscipit. Suspendisse sit amet blandit augue. Aliquam pellentesque id ipsum in tempus. Donec lobortis venenatis ornare. Donec ultricies interdum dolor, ut tincidunt velit malesuada in.' },
];
/* eslint-enable */

const tabsFromServer = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

export class App extends React.Component {
  state = {
    tabsArray: tabsFromServer,
    content: '',
  }

  onTabSelected = (id) => {
    this.setState(state => ({
      content: state.tabsArray.find(tab => tab.id === id).content,
    }));
  }

  render() {
    const { tabsArray, content } = this.state;

    return (
      <div>
        <h1>React tabs</h1>

        <Tabs
          tabs={tabsArray}
          onTabSelected={this.onTabSelected}
        />

        <p>{content}</p>
      </div>
    );
  }
}
export default App;
