import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tabs.scss';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__header">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              value={index}
              className={
                cn('tabs__button',
                  { 'tabs__button--active': index === tabIndex })
              }
              onClick={() => this.onTabSelected(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabs__viewport">
          { tabs[tabIndex].content }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
