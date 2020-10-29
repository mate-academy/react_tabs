import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { TabsTypes } from '../Shape/TabsTypes';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
    state = {
      index: 0,
    };

  onTabSelected = indexTab => () => {
    this.setState({
      index: indexTab,
    });
  };

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="center">
        <ul className="nav nav-tabs">
          {tabs.map((tab, indexTab) => (
            <li key={tab.title}>
              <Tab
                title={tab.title}
                isActive={index === indexTab}
                click={this.onTabSelected(indexTab)}
              />
            </li>
          ))}
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <p>
              {tabs[index].content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    TabsTypes,
  ).isRequired,
};
