import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    tabs: [...this.props.tab],
  }

  selected = (event, selected) => {
    event.preventDefault();

    this.setState((state) => {
      const newTabs = state.tabs.map((tab) => {
        if (selected.id !== tab.id && !tab.active) {
          return tab;
        }

        if (selected.id === tab.id && tab.active) {
          return tab;
        }

        return {
          ...tab,
          active: !tab.active,
        };
      });

      return { tabs: newTabs };
    });
  }

  render() {
    const { tabs } = this.state;
    const textContent = this.state.tabs.find(tab => tab.active);

    return (
      <>
        <div className="container tab">
          <ul className="tab__list">
            {tabs.map(element => (
              <Tab tab={element} event={this.selected} key={element.id} />
            ))}
          </ul>
        </div>
        <article className="article">
          {textContent.content}
        </article>
      </>
    );
  }
}

export default Tabs;
