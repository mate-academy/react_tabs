import React, { Component } from 'react';

class Tabs extends Component {

  render() {
    const { tabs, onTabSelected} = this.props;
    return (
      <>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            onClick={() => onTabSelected(index)}
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
