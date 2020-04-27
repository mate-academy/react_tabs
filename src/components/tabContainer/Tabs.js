import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    tabs: [...this.props.tab],
    activeTab: 0,
  }

  selected = (event, selected) => {
    event.preventDefault();

    this.setState((state) => {
      const newActive = state.activeTab = selected.id
      console.log('state ',state.activeTab)

      return { activeTabs: newActive };
    });
  }

  render() {
    const { tabs } = this.state;

    return (
      <>
        <div className="container tab">
          <ul className="tab__list">
            {tabs.map(element => (
              <Tab tab={element} event={this.selected} active={this.state.activeTab} key={element.id} />
            ))}
          </ul>
        </div>
        <article className="article">
          {this.state.tabs[this.state.activeTab].content}
        </article>
      </>
    );
  }
}

export default Tabs;
