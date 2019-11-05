import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Content extends Component {
  render() {
    return (
      <div className="content_container">
        {/* // eslint-disable-next-line react/prop-types */}
        {this.props.state.tabs[this.props.state.currentTabIndex].content}
      </div>
    );
  }
}

export default Content;
