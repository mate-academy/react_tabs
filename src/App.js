import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    setActiveTab: 0,
  };

  handleChangeTab = (event) => {
    this.setState({
      setActiveTab: event,
    });
  }

  render() {
    const { tabs, setActiveTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          setActiveTab={setActiveTab}
          handleChangeTab={this.handleChangeTab}
        />
        <section>
          {tabs[setActiveTab].content}
        </section>
      </div>
    );
  }
}

export default App;
