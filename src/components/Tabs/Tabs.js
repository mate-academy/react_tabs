import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';
import { Content } from '../Content/Content';

class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  onTabSelected = (event) => {
    this.setState({
      tabIndex: +event.target.getAttribute('data-number'),
    });
  }

  render() {
    const { tabs } = this.props;

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
                'tabs__button-active': this.state.tabIndex === i,
              })
            }
            onClick={this.onTabSelected}
          >
            {item.title}
          </button>
        ))}
        <Content text={tabs[this.state.tabIndex]} />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Tabs;
