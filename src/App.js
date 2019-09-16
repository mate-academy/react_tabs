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
  };

  pageText = this.state.tabs[0].content

changeText = newText => (
  this.setState({
    pageText: newText,
  }))

render() {
  const { tabs } = this.state;

  return (
    <div className="App">

      <input
        type="text"
        value={this.state.pageText}
        placeholder={tabs[0].content}
      />

      { this.state.tabs.map((tab, index) => {
        return (
          <Tabs
            key={index}
            title={tab.title}
            content={tab.content}
            onChangeText={() => this.changeText(tab.content)}
          />
        );
      }) }
    </div>
  );
}
}

export default App;
