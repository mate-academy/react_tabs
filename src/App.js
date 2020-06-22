/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

const tabs = [
  {
    title: 'Home',
    content: 'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
  },
  {
    title: 'Profile',
    content: 'Declarative views make your code more predictable and easier to debug.',
  },
  {
    title: 'Contact',
    content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
  },
];

class App extends React.Component {
  state ={
    textContent: tabs[0].content,
  }

  change = (index) => {
    this.setState(state => ({
      textContent: tabs[index].content,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <Tabs tabs={tabs} onChange={this.change} />
        <p>{this.state.textContent}</p>
      </div>
    );
  }
}

export default App;
