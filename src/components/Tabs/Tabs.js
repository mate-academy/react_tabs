import React, { Component } from 'react';
import Tab from '../Tab/Tab';
import { TabListProps } from '../../constants/proptypes';

import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.tabs[0].title,
    };
  }

  onClickTabItem = title => this.setState({ activeTab: title });

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="tabs">
          <ul className="tabs-list">
            {tabs.map((tab) => {
              const { title, content } = tab;
              const { onClickTabItem } = this;
              const { activeTab } = this.state;

              return (
                <Tab
                  key={title}
                  title={title}
                  content={content}
                  isActive={title === activeTab}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => {
              const { title, content } = tab;

              if (title !== this.state.activeTab) {
                return undefined;
              }

              return (
                <p
                  key={title}
                  className="tab-content__item"
                >
                  {content}
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

Tabs.propTypes = TabListProps;

export default Tabs;
