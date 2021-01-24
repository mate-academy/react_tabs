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
      <div>
        {items.map((item, index) => (
          <button
            className={classNames({
              tabs: true,
              active: currentIndex === index,
            })}
            type="button"
            onClick={() => this.setState({
              currentIndex: index,
            })}
          >
            {item.title}
          </button>
        ))}
        <p>
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
