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
          isActive: !index, // first menu item will had isActive = true
        })),
      };
    } else {
      this.state = {
        tabs: this.getTabsFromChildren(),
      }
    }
  }

  getTabsFromChildren() {
    const children = this.props.children.length ? [ ...this.props.children ] : [ this.props.children ];

    return children.map((child, index) => ({
      title: child.props.title,
      content: child.props.children,
      isActive: !index, // first menu item will had isActive = true
    }));
  }

  isActiveMenuItem = (event) => {
    const clickMenyItem = this.state.tabs.find(tab => tab.title === event.target.textContent);

    this.setState((prevProps) => {
      const prevActiveMenuItem = prevProps.tabs.find(tab => tab.isActive === true);

      if (clickMenyItem !== prevActiveMenuItem) {
        return ({
          tabs: prevProps.tabs.map(tab => {
            if (tab === clickMenyItem) {
              return ({
                ...tab,
                isActive: true,
              });
            } else if (tab === prevActiveMenuItem) {
              return ({
                ...tab,
                isActive: false,
              });
            }

            return tab;
          }),
        });
      }
    });
  }

  render() {
    const activeTab = this.state.tabs.find(tab => tab.isActive === true);

    return (
      <>
        <div className="ui attached tabular menu" onClick={this.isActiveMenuItem}>
          {this.state.tabs.map(tab => <TabMenuItem key={tab.title} tab={tab} />)}
        </div>
        <TabContent tabText={activeTab.content} />
      </>
    );
  }
}

export default Tabs;
