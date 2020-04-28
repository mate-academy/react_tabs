import React from 'react';
import './App.css';
import Tabs from './Components/Tabs';
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

class App extends React.Component {
  state = {
    activeIndex: 0,
  }

  render = () => (
    <>
      <h1>Tabs</h1>
      <div className="container">
        <Tabs
          tabindex={this.state.activeIndex}
          tabs={tabs}
          tabClickHandler={(currentIndex) => {
            this.setState({ activeIndex: currentIndex });
          }}
        />
        <section className="tabs__content">
          {tabs[this.state.activeIndex].content}
        </section>
      </div>
    </>
  );
}

export default App;
