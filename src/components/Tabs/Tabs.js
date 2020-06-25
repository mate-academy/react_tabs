import React from 'react';
import classNames from 'classnames/bind';
import { TabContent, TabContentProps } from '../TabContent/TabContent';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  onTabSelected = (event, index) => {
    this.setState({
      tabIndex: index,
    });
  };

  btnClass = index => (
    classNames({
      enableButton: this.state.tabIndex === index,
      tabButton: true,
    })
  );

  render() {
    const { tabs } = this.props;

    return (
      <div>
        {
          tabs.map((tab, index) => (
            <button
              type="button"
              onClick={event => this.onTabSelected(event, index)}
              key={tab.title}
              className={classNames(this.btnClass(index))}
            >
              {tab.title}
            </button>
          ))
        }

        <TabContent state={this.state.tabIndex} tabs={tabs} />
      </div>
    );
  }
}

Tabs.propTypes = TabContentProps.tabs;
