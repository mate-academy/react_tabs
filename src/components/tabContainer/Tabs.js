import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    tabs: [...this.props.tab],
    activeTab: 0,
  }

  selected = (selected) => {
    this.setState((state) => {
      const newActive = state.activeTab = selected.id;

      return { activeTabs: newActive };
    });
  }

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <>
        <div className="container tab">
          <ul className="tab__list">
            {tabs.map(element => (
              <Tab tab={element} event={this.selected} active={activeTab} key={element.id} />
            ))}
          </ul>
        </div>
        <article className="article">
          {tabs[activeTab].content}
        </article>
      </>
    );
  }
}

export default Tabs;
