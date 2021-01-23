import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })).isRequired,
    index: PropTypes.number.isRequired,
    onTabSelected: PropTypes.func.isRequired,
  }

  tabSelectionHandler = (index) => {
    this.props.onTabSelected(index);
  }

  render() {
    const { tabs, index } = this.props;

    return (
      <div>
        {tabs.map(({ title }, tabIndex) => (
          <button
            className={classNames(['button', {
              'button--active': tabIndex === index,
            }])}
            type="button"
            key={title}
            onClick={() => this.tabSelectionHandler(tabIndex)}
          >
            {title}
          </button>
        ))}
      </div>
    );
  }
}
