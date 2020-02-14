import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Content } from './Content';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    tabIndex: this.props.index,
  };

  onTabSelected = (event) => {
    const { target } = event;
    const index = +target.dataset.number;

    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            className={
              classNames({
                button__heading: true,
                'button__heading--active': tabIndex === i,
              })
            }
            data-number={i}
            onClick={this.onTabSelected}
          >
            {tab.title}
          </button>
        ))}
        <Content tab={tabs[tabIndex]} />
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number,
};

Tabs.defaultProps = {
  index: 0,
};

export default Tabs;
