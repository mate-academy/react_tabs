import React from 'react';

import Tabs from './Tabs';
import Tab from './Tab';

import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    childVisible: 0,
  };

  onTabSelected(num) {
    this.setState({ childVisible: num });
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs>
          <div className="tab-switch__wrapp">
            {tabs.map((elem, index) => {
              return (
                <div onClick={() => this.onTabSelected(index)} className="tab">
                  {elem.title}
                </div>
              );
            })}
          </div>

          {tabs.map((elem, index) => {
            return (
              <>
                {this.state.childVisible === index
                  ? (
                    <Tab
                      title={elem.title}
                      key={elem.title}
                    >
                      { elem.content }
                    </Tab>
                  )
                  : null
                }
              </>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

export default App;
