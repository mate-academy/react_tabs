import React from 'react';
import ClassNames from 'classnames';
import Proptypes, { object } from 'prop-types';
import { Tab } from '../Tab';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedTabContent: this.props.tabs[0].content,
  }

  onTabSelected = (index, content) => {
    this.setState({
      selectedTabIndex: index,
      selectedTabContent: content,
    });
  };

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex, selectedTabContent } = this.state;

    return (
      <div className="tabs">
        <ul className="tabs__buttons">
          {tabs.map(tab => (
            <li
              className={
                ClassNames('tabs__tab', { active: selectedTabIndex === tab.id })
              }
              key={tab.id}
            >
              <Tab
                className="tabs__tab-btn"
                onTabSelected={this.onTabSelected}
                id={tab.id}
                content={tab.content}
                title={tab.title}
              />
            </li>
          ))}
        </ul>
        <div className="content">{selectedTabContent}</div>
      </div>
    );
  }
}
Tabs.propTypes = {
  tabs: Proptypes.arrayOf(object).isRequired,
};
