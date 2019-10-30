import React, {Component} from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content_container">
        {this.props.state.tabs[this.props.state.currentTabIndex].title}
      </div>
    );
  }
}

export default Content;
