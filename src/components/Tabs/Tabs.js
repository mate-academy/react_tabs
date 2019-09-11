import React, { Component } from 'react';
import './Tabs.scss';
import { TabsTypes } from '../../constants/proptypes';
import { Tab } from '../Tab/Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: this.props.activeTab,
    };
    this.activeTabChange = this.activeTabChange.bind(this);
  }

  activeTabChange(newActiveTab) {
    this.setState({ activeTabKey: newActiveTab });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            key={tab.title}
            title={tab.title}
            content={tab.content}
            index={i}
            isActive={i === this.state.activeTabKey}
            onClick={this.activeTabChange}
          />
        ))}
      </div>
    );
  }
}

Tabs.propTypes = TabsTypes;

export default Tabs;
