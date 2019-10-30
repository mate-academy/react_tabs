import React from 'react';

class Tabs extends React.Component {
  render () {
    return (
      <>
        {this.props.tabs.map ( (tab, index) => {
          return (
            <button
              type="button"
              key={tab.title}
              onClick={() => this.props.onTabSelected(index)}
            >
              {tab.title}
            </button>
          );
        })
        }
      </>
    );
  }
}

export default Tabs;
