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
     selectedTabId: 'tab-1',
   }

   addTab = (event) => {
     this.setState({ selectedTabId: event.target.value });
   }

   render() {
     const { selectedTabId } = this.state;
     const { addTab } = this;

     return (
       <div className="App">
         <h1>{`Selected tab is ${selectedTabId}`}</h1>
         <Tabs
           tabs={tabs}
           addTab={addTab}
           selectedTabId={selectedTabId}
         />
       </div>
     );
   }
}
