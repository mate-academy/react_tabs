import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Tabs extends Component {
  tabSelected(selectedIndex) {
    console.log(selectedIndex);
  }

  render() {
    return (
      <>
        {this.props.tabs.map(el => (
          <button
            onClick={() => this.props.onTabSelected(el.content)}
            class="ui positive button">
            {el.title}
          </button>
        ))}
      </>
    );
  }
}

export default Tabs;
