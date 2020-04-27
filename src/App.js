import React from 'react';
import './App.css';
import Tabs from './Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  id: index + 1, ...tab,
}));

class App extends React.Component {
 state = {
   active: 1,
 }

 setActiveTab = tabId => this.setState({
   active: tabId,
 })

 render() {
   return (
     <div>
       <Tabs
         tabs={preparedTabs}
         clickHandler={this.setActiveTab}
         activeId={this.state.active}
       />
       <section className="content">
         {tabs[this.state.active - 1].content}
       </section>
     </div>
   );
 }
}

export default App;
