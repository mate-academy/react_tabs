import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

class Tab extends React.PureComponent {
  render() {
    const { title, content, onTabSelected, tabIndex } = this.props;

    return (
      <li className="Tab">
        <h2
          tabIndex={tabIndex}
          onFocus={() => onTabSelected(content)}
        >
          {title}
        </h2>
      </li>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default Tab;
