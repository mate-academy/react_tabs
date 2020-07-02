import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Content from './components/Content/Content';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 2,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: tabs[0].content,
    };
  }

  changeTab = (content) => {
    this.setState({
      currentContent: content,
    });
  }

  render() {
    return (
      <div>
        <h1>React tabs</h1>
        <Tabs tabs={tabs} onChangeTab={this.changeTab} />
        <Content currentContent={this.state.currentContent} />
      </div>
    );
  }
}
