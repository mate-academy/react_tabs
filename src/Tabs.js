import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        {tabsR.map((tab, i) => (
          <button
            type="button"
            value={`${i}`}
            className={classNames({ active: tabNumber === i })}
            onClick={this.tabSwitcher}
          >
            {tab.title}
          </button>
        ))}
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
