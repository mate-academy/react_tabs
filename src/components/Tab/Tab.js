import React, { Component } from 'react';
import { TabProps } from '../../constants/proptypes';

import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, isActive, onClick } = this.props;
    const classNames = isActive
      ? 'tabs-list__item tabs-list__item--active'
      : 'tabs-list__item';

    return (
      <>
        <li
          className={classNames}
          key={title}
          onClick={() => onClick(title)}
        >
          {title}
        </li>
      </>
    );
  }
}

Tab.propTypes = TabProps;

export default Tab;
