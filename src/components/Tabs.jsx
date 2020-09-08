import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  render() {
    const { items } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="tabs__wrapper">
        {items.map((item, index) => (
          <button
            className={classNames({
              tabs: true,
              'tabs--active': currentIndex === index,
            })}
            type="button"
            onClick={(event) => {
              const pickedTab = event.target.textContent;

              this.setState({
                currentIndex: (pickedTab[pickedTab.length - 1]) - 1,
              });
            }}
          >
            {item.title}
          </button>
        ))}
        <p className="tabs__text">
          {items[currentIndex].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
