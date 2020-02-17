import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';
import { Content } from '../Content/Content';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  onTabSelected = (event) => {
    const index = +event.target.getAttribute('data-number');

    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs">
        {tabs.map((item, i) => (
          <button
            type="button"
            key={item.title}
            data-number={i}
            className={
              classNames({
                tabs__button: true,
                'tabs__button-active': tabIndex === i,
              })
            }
            onClick={this.onTabSelected}
          >
            {item.title}
          </button>
        ))}
        <Content text={tabs[tabIndex]} />
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
