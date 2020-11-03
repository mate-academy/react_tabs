import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  onTabSelected = (event) => {
    this.setState({
      activeIndex: event.target.value,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="tabs__container">
        <div className="tabs__tab tab">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              className={
                +activeIndex === index
                  ? 'tab__item tab__item--is-active'
                  : 'tab__item'
              }
              onClick={this.onTabSelected}
              value={index}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabs__selected">
          {tabs[activeIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
