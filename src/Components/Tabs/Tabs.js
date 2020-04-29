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
    return (
      <div>
        {this.props.tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => this.handleClick(index)}
            className={`${this.state.tabIndex === index
              ? 'button__clicked' : 'button'}`}
          >
            {tab.title}
          </button>
        ))}
        <p>
          {this.props.tabs[this.state.tabIndex].content}
        </p>
      </div>
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
