import React from 'react';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <>
        <Tabs tabs={tabs}>
          <Tabs.Tab title="else title 1">
            some else text 1
          </Tabs.Tab>

          <Tabs.Tab title="else title 2">
            some else text 2
          </Tabs.Tab>
        </Tabs>
      </>
    );
  }
}

export default App;
