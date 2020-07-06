import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

export class Tabs extends Component {
  state = {
    activeTab: 0,
  };

  onClickTabItem = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        {
          tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              onClick={
                () => this.onClickTabItem(index)
              }
              className={classNames({
                activeButton: activeTab === index,
                button: true,
              })}
            >
              {tab.title}
            </button>
          ))
        }
        <Tab
          state={this.state.activeTab}
          tabs={tabs}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};
