import React from 'react';
import './App.css';
import TabList from './components/TabList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: 'Tab 1', content: 'Some text 1' },
        { title: 'Tab 2', content: 'Some text 2' },
        { title: 'Tab 3', content: 'Some text 3' },
      ],
      index: 0,
    };
    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected(index) {
    this.setState({ index });
  }

  render() {
    const { tabs, index } = this.state;

    return (
      <TabList tabs={tabs} index={index} Clicked={this.onTabSelected} />
    );
  }
}

export default App;
