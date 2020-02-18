import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabsContent } from './TabsContent';
import { TabsItem } from '../TabsItem/TabsItem';
import './Tabs.css';

export class Tabs extends Component {
    state = {
      activeTabIndex: 0,
    };

  handleTabs = (idx) => {
    this.setState({ activeTabIndex: idx });
  }

  render() {
    const { tabs } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="jumbotron tabs-box">
        <ul className="nav nav-tabs">
          {tabs.map(({ title, content }, idx) => (
            <TabsItem
              key={title}
              title={title}
              contentTabs={tabs}
              isActive={activeTabIndex === idx}
              handleTabs={() => this.handleTabs(idx)}
            />
          ))}
        </ul>

        <TabsContent
          content={tabs[activeTabIndex].content}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
