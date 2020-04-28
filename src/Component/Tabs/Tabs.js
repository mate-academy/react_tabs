import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { TabsType } from '../../Typedefs';

class Tabs extends React.Component {
  state = {
    activeIndex: 1,
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.props.tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              className={index === this.state.activeIndex ? 'head-active' : ''}
              onClick={() => (this.setState({ activeIndex: index }))}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="content">
          {this.props.tabs[this.state.activeIndex].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabsType.isRequired).isRequired,
};
export default Tabs;
