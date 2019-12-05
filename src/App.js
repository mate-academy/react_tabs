import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Tabs from './Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [
        { title: 'Tab 1', content: 'Some text 1' },
        { title: 'Tab 2', content: 'Some text 2' },
        { title: 'Tab 3', content: 'Some text 3' },
      ],

      currentText: '',
    };
  }

  onTabSelected = text => (
    this.setState({ currentText: text })
  );

  render() {
    return (
      <div className="App">
        <Buttons
          handler={this.onTabSelected}
          tabs={this.state.tabs}
        />
        <Tabs text={this.state.currentText} />
      </div>

    );
  }
}

export default App;
