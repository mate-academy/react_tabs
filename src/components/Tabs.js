import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  handleClick = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div>
        <div className="tabs">
          {this.props.tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              className={this.state.activeIndex === index
                ? 'tabs__button tabs__button--active'
                : 'tabs__button'}
              onClick={() => this.handleClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs__content">
          {this.props.tabs[this.state.activeIndex].content}
        </div>
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
