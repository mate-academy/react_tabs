import React, { Component } from 'react';

class Content extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="content_container">
        {state.tabs[state.currentTabIndex].content}
      </div>
    );
  }
}

export default Content;
