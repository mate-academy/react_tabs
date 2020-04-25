import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

class Tab extends React.PureComponent {
  render() {
    const { title, content, tabIndex, onTabSelected, toggleActiv } = this.props;

    return (
      <li
        tabIndex={tabIndex}
        onFocus={(e) => {
          onTabSelected(content);
          toggleActiv(e);
        }}
      >
        {title}
      </li>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  toggleActiv: PropTypes.func.isRequired,
};

export default Tab;
