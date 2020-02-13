import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
  state = {
    currentIndex: 0,
  };

  render() {
    const { currentIndex } = this.state;
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        {tabs.map((tab, i) => (
          <button
            type="button"
            key={tab.title}
            className={currentIndex === i ? 'active' : 'non-active'}
            onClick={() => this.setState({ currentIndex: i })}
          >
            {tab.title}
          </button>
        ))}
        <div className="content">{tabs[currentIndex].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tabs;
