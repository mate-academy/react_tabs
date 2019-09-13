import React from 'react';
import './App.css';
import Tabs from './component/Tabs/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'wqfojwqhnfwea;ofhjo;w;ofjw;ojfweo;fj;wef' },
      { title: 'Tab 3', content: 'Hello world!' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="app-wrapper">
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
