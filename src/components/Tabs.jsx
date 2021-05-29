import React from 'react';

export class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs-container">
       {this.props.tabs.map(({id, title, content}) => {
         return (
          <div key={id} className="tab-item">
            <h2 onClick={() => this.props.onTab(id, title)}>
              {title}
            </h2>
            <div>
              {id === this.props.selectedTab && content}
            </div>
          </div>
        )}
          )
       }
      </div>
    )
  }
}