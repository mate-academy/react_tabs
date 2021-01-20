import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabNumber: 0,
  };

  tabSwitcher = (event) => {
    this.setState({
      tabNumber: +event.target.value,
    });
  };

  render() {
    const { tabs: tabsR } = this.props;
    const { tabNumber } = this.state;

    return (
      <>
        <button
          type="button"
          value="0"
          className={tabNumber === 0 ? 'active' : ''}
          onClick={this.tabSwitcher}
        >
          Tab 1
        </button>
        <button
          type="button"
          value="1"
          className={tabNumber === 1 ? 'active' : ''}
          onClick={this.tabSwitcher}
        >
          Tab 2
        </button>
        <button
          type="button"
          value="2"
          className={tabNumber === 2 ? 'active' : ''}
          onClick={this.tabSwitcher}
        >
          Tab 3
        </button>
        <div className="text">
          {tabsR[tabNumber].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
