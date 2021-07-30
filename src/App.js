import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import Tabs from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends Component {
  state={
    tabs: [...tabs],
    selectedTab: 'tab-1',
  }

  onTabSelected = (id) => {
    this.setState(prevSate => ({
      selectedTab: id,
    }), () => {
    });
  }

  render() {
    return (
      <Card className="App">
        <Card.Body>
          <Card.Title>
            <h1>
              Selected tab is:
              {' '}
              {this.state.selectedTab}
            </h1>
          </Card.Title>
          <Card.Text>
            <Tabs
              onTabSelectes={this.onTabSelected}
              tabs={this.state.tabs}
              selectedTab={this.state.selectedTab}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
