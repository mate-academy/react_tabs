import React from 'react';
import './App.css';

import Button from './Button';
import Content from './Button';
class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1', key: 0, },
      { title: 'Tab 2', content: 'Some text 2', key: 1, },
      { title: 'Tab 3', content: 'Some text 3', key: 2, },
    ],
    activ: 'Some text 1',
    buttonIndex: 0,
  };

  buttonCliked(isActiv, buttonIndex){
    this.setState ({
      activ: isActiv,
      buttonIndex: buttonIndex,
    });
  }


  render() {
    return (
      <div className="App">
        <div className={"content"}>
          <div className={"block__button"}>
            <Button props={this.state} cliked={this.buttonCliked.bind(this)} />
          </div>
          <Content text={this.state.activ}/>
        </div>
      </div>
    );
  }
}

export default App;
