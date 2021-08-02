import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
   state = {
     selectedTabTitle: 'Tab 1',
   }

   onTabSelected = (event) => {
     if (event.target.value === this.state.selectedTabTitle) {
       return;
     }

     this.setState({ selectedTabTitle: event.target.value });
   }

   render() {
     const { selectedTabTitle } = this.state;
     const { onTabSelected } = this;

     return (
       <div className="App">
         <h1>{`Selected tab is ${selectedTabTitle}`}</h1>
         <Tabs
           tabs={tabs}
           addTab={onTabSelected}
           selectedTabTitle={selectedTabTitle}
         />
       </div>
     );
   }
}
