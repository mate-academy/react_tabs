import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export class Tabs extends Component {
  state = {
    tabIndex: 0,
  }

  handleClick = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabIndex } = this.state;
    const { tabs } = this.props;
    const { content } = tabs[tabIndex] || {};

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={cn({
                tabs__button: true,
                'tabs__button--isActive': tabIndex === index,
              })}
              type="button"
              onClick={() => this.handleClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p>{content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
