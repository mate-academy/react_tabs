import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    indexOfTabs: 0,
  }

  handleClick = (index) => {
    this.setState({
      indexOfTabs: index,
    });
  }

  render() {
    return (
      <section>
        {this.props.tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            className={`button ${this.state.indexOfTabs === index
              ? 'button--active'
              : ''}`}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <p className="text">
          {this.props.tabs[this.state.indexOfTabs].content}
        </p>
      </section>
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
