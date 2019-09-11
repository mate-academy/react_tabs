import React, { Component } from 'react';
import './TabsList.scss';
import { TabsTypes } from '../../constants/proptypes';
import { Tab } from '../Tab/Tab';

export default class TabsList extends Component {
  constructor(props) {
    super(props);
    this.activeTabChange = this.activeTabChange.bind(this);
    this.state = {
      activeTabKey: this.props.activeTabTitle,
    };
  }

  activeTabChange(activeTitle) {
    this.setState({ activeTabKey: activeTitle });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="tabs">
        {children.map(tab => (
          <Tab
            key={tab.title}
            title={tab.title}
            content={tab.content}
            isActive={tab.title === this.state.activeTabKey}
            onChange={this.activeTabChange}
          />
        ))}
      </div>
    );
  }
}

TabsList.propTypes = TabsTypes;
