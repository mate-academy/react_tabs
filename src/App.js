import React from 'react';
import { Tab } from './components/Tab/Tab';
import 'bulma/css/bulma.css';

const tabs = [
  {
    title: 'Tab 1', content: 'Some text 1',
  },
  {
    title: 'Tab 2', content: 'Some text 2',
  },
  {
    title: 'Tab 3', content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    active: this.selectTab,
  }

  selectTab = (e) => {
    this.setState({
      active: e,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tab
          tabs={tabs}
          active={this.state.active}
          handlerOnClick={this.selectTab}
        />
        <div className="content">
          {tabs.filter(tab => tab.title === this.state.active)
            .map(tab => <p>{tab.content}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
