import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './Content';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    contentNum: this.props.index,
  };

  onTabSelected = (event) => {
    const { target } = event;
    const index = +target.dataset.number;

    this.setState({
      contentNum: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { contentNum } = this.state;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            className={
              (contentNum === i)
                ? 'button__heading button__heading--active'
                : 'button__heading'
            }
            data-number={i}
            onClick={this.onTabSelected}
          >
            {tab.title}
          </button>
        ))}
        <Content tab={tabs[contentNum]} />
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
