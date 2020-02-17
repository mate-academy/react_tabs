import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import classNames from 'classnames';

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
              className={classNames({
                tabs__button: true,
                'tabs__button--active': tabIndex === index,
              })}
              onClick={() => this.handleClick(index)}
              type="button"
              key={tab.id}
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
