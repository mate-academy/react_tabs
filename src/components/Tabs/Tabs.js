import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  handlerClick = (event) => {
    this.setState({ index: +event.target.id });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <ul className="tabs">
          {tabs.map((tab, i) => (
            <Tab
              key={tab.id}
              id={i}
              activeClass={i === this.state.index
                ? 'tabs__element--active'
                : ''}
              toggle={this.handlerClick}
            >
              {tab.title}
            </Tab>
          ))}
        </ul>
        <p className="tabs__text">{tabs[this.state.index].content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
