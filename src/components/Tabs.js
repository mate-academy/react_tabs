import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
    state = {
      tabs: this.props.tabs,
      tabIndex: 0,
    };

  activeTab = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="tabs__wrap">
        {this.props.tabs.map((item, index) => (
          <button
            type="button"
            onClick={() => this.activeTab(index)}
            key={item.title}
            className={`${this.state.tabIndex === index
              ? 'button button__active' : 'button'}`}
          >
            {item.title}
          </button>
        ))}
        <p className="tabs__content">
          {tabs[this.state.tabIndex].content}
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
