import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  handleClick = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            className={`tab ${this.state.tabIndex === index
              ? 'tab-active'
              : ''}`}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <section className="text">
          <div>{tabs[this.state.tabIndex].content}</div>
        </section>
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

export default Tabs;
