import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Tabs } from '../Tabs/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.PureComponent {
  state={
    id: tabs[0].id,
    title: tabs[0].title,
  }

  render() {
    return (
      <div
        className="block"
      >
        <h1>
          Selected tab is&nbsp;
          {this.state.title}
        </h1>
        <Nav
          variant="tabs"
          className="Nav"
        >
          {tabs.map(x => (
            <Tabs
              className="Nav__child"
              key={x.id}
              onClick={() => this.setState(
                {
                  id: x.id,
                  title: x.title,
                },
              )
              }
              stateId={this.state.id}
              {...x}
            />
          ))}
        </Nav>
      </div>
    );
  }
}

export default App;
