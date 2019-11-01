import React from 'react';
import Tab from '../tab/Tab';
import Content from '../content/Content';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected(index) {
    this.setState(state => ({
      ...state,
      activeTab: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <div className="ui attached menu">
          {tabs.map((tab, index) => (
            <Tab
              selectedTab={() => this.onTabSelected(index)}
              title={tab.title}
              activeTab={activeTab}
            />
          ))}
        </div>
        <Content tabs={tabs} index={activeTab} />
      </>
    );
  }
}

export default Tabs;
