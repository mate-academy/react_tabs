import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  onTabSelected = (event) => {
    const { selectTab } = this.props;
    const activeIndex = event.target.value;

    selectTab(activeIndex);
  }

  render() {
    const { title, index, className } = this.props;

    return (
      <button
        className={className}
        type="button"
        onClick={this.onTabSelected}
        value={index}
      >
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  selectTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
