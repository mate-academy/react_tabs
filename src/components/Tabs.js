import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Tabs extends Component {
  render() {
    return (
      <>
        {/* // eslint-disable-next-line react/prop-types */}
        {this.props.tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            // eslint-disable-next-line react/prop-types
            onClick={() => this.props.onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))
        }
      </>
    );
  }
}

export default Tabs;
