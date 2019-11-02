import React from 'react';
import TabContent from '../tabContent/TabContent';
import TabMenuItem from '../tabMenuItem/tabMenuItem';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    if (this.props.tabs) {
      this.state = {
        tabs: props.tabs.map((tab, index) => ({
          ...tab,
        })),
        activeTabId: 1,
      };
    } else {
      this.state = {
        tabs: this.getTabsFromChildren(),
        activeTabId: 1,
      };
    }
  }

  getTabsFromChildren() {
    const children = this.props.children.length ? [...this.props.children] : [this.props.children];

    return children.map((child, index) => ({
      id: index + 1,
      title: child.props.title,
      content: child.props.children,
    }));
  }

  isActiveMenuItem = (event) => {
    const clickMenyItem = this.state.tabs.find(tab => tab.title === event.target.textContent);

    this.setState((prevState) => {
      const prevActiveMenuItem = prevState.tabs.find(tab => tab.id === prevState.activeTabId);

      if (clickMenyItem !== prevActiveMenuItem) {
        return ({
          activeTabId: clickMenyItem.id,
        });
      }
    });
  }

  render() {
    const { tabs, activeTabId } = this.state;
    const activeTab = tabs.find(tab => tab.id === activeTabId);

    return (
      <>
        <div className="ui attached tabular menu" onClick={this.isActiveMenuItem}>
          {tabs.map(tab => <TabMenuItem key={tab.title} tab={tab} activeTabId={activeTabId} />)}
        </div>
        <TabContent tabText={activeTab.content} />
      </>
    );
  }
}

export default Tabs;
