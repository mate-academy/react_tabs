import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export class Tabs extends React.Component {
  state = {
    currentIndex: 0,
    tabs: this.props.tabs,
  }

  changeIndex = (index) => {
    this.setState({ currentIndex: index });
  }

  render() {
    const { tabs, currentIndex } = this.state;

    return (
      <div className="container">
        <div className="tab">
          {tabs.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="tab__button"
              value={item.content}
              onClick={() => {
                this.changeIndex(index);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <p>
          {tabs[currentIndex].content}
        </p>
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
