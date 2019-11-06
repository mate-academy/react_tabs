import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Tabs extends Component {
  render() {
    return (
      <>
        {this.props.tabs.map(el => (
          <button
            onClick={() => this.props.onTabSelected(el.content)}
            className="ui positive button">
            {el.title}
          </button>
        ))}
      </>
    );
  }
}

export default Tabs;
