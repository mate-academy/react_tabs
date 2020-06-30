import React, { createRef } from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.tabRef = createRef();
  }

  render() {
    const { title, index, changeTab, isActive } = this.props;

    return (
      <button
        className={`tabs__button ${isActive ? 'tabs__button--active' : ''}`}
        ref={this.tabRef}
        type="button"
        onClick={() => changeTab(index)}
      >
        {title}
      </button>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
