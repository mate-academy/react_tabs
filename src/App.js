import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1', key: 0 },
      { title: 'Tab 2', content: 'Some text 2', key: 1 },
      { title: 'Tab 3', content: 'Some text 3', key: 2 },
    ],
    activ: 'Some text 1',
    buttonIndex: 0,
    };

  buttonCliked(isActiv, buttonIndex){
    this.setState ({
      activ: isActiv,
      buttonIndex: buttonIndex
    });
  }

  render() {
    const button = [];
    const { tabs } = this.state;
    for (const tab of tabs) {
      button.push(<button disabled={tab.key === this.state.buttonIndex}
                          className={"button"}
                          onClick={ () => this.buttonCliked(tab.content, tab.key)}
                          key={tab.key}>{tab.title}
                  </button>)
    }

    return (
      <div className="App">
        <div className={"content"}>
          <div className={"block__button"}>
            {button}
          </div>
          <p className={"text"}>{this.state.activ}</p>
        </div>
      </div>
    );
  }
}

export default App;
