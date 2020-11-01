import React from 'react';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  hendleClickTab = (event) => {
    this.setState({index: +event.target.value})
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <>
        {tabs.map((tab, i) => (
            <button
              onClick={this.hendleClickTab}
              className={i === index ? 'tab tab--active' : 'tab'}
              value={i}
              key={i}
            >
              {tab.title}
            </button>
        ))}

        {tabs.map((tab, i) => (
            <div
              onClick={this.hendleClickTab}
              className={i === index ? 'content' : 'content--none'}
              key={i}
            >
              <h3>{tab.content}</h3>
            </div>
        ))}
      </>
    );
  }
}
