import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Tabs extends Component {
  tabSelected(selectedIndex) {
    console.log(selectedIndex);
  }

  render() {
    return (
      <>
        <button onClick={() => this.props.onTabSelected(0)}
          class="ui positive button">Tab 1</button>
        <button onClick={() => this.props.onTabSelected(1)}
          class="ui positive button">Tab 2</button>
        <button onClick={() => this.props.onTabSelected(2)}
          class="ui positive button">Tab 3</button>
        </>
    );
  }
}

export default Tabs;
