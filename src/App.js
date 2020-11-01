import React from 'react';
import './App.scss';
import { Tab } from './components/Tab';
import { Tabs } from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line no-unused-vars
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

const preparedTabs = tabs.map((tab,index) => ({
  ...tab,
  id: index,
}))

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <h1>First way</h1>
        <Tabs tabs={preparedTabs} />

        <h1>Second way</h1>
        <Tabs>
          <Tab title="MyTab1">My text content1</Tab>
          <Tab title="MyTab2">My text content2</Tab>
        </Tabs>
      </div>
    )
  }
}

export default App;
