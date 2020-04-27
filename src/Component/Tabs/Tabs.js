import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { TabsType } from '../../Typedefs';

class Tabs extends React.Component {
  state = {
    index: 0,
    prev: null,
  }

  // componentDidMount() {
  // }

  onTabSelected = (e) => {
    const x = e.target.id;

    this.setState(() => ({ index: x }));

    if (this.state.prev) {
      this.state.prev.classList.remove('head-active');
    }

    this.state.prev = e.target;
    e.target.classList.add('head-active');
  };

  render() {
    return (
      <>
        <div className="wrapper">
          {this.props.tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              className="head"
              id={tab.id}
              onClick={this.onTabSelected}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="content">
          {this.props.tabs[this.state.index].content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabsType.isRequired).isRequired,
};
export default Tabs;
