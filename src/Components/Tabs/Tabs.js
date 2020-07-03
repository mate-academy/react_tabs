import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

export default class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  clickHandler = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs__container">
        <div className="tabs__nav">
          {
            tabs.map((tab, index) => (
              <button
                className="tabs__button"
                type="button"
                onClick={() => this.clickHandler(index)}
              >
                {tab.title}
              </button>
            ))
          }
        </div>
        <div className="tabs__content">
          {this.props.tabs[this.state.tabIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
