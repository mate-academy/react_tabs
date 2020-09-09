import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    tabs: [...this.props.tabs],
    index: 0,
  }

  onTabSelected = (indexOfButton) => {
    this.setState({
      index: indexOfButton,
    });
  }

  render() {
    return (
      <>
        <div className="tabs">
          {this.state.tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              className={"tabs__button"
                + (index === this.state.index ? ' selected' : '')}
              onClick={() => this.onTabSelected(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="text">
          {this.state.tabs[this.state.index].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default Tabs;
