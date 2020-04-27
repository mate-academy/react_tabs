import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { TabsType } from '../../Typedefs';

class Tabs extends React.Component {
  state = {
    index: 0,
    prev: null,
  }

  componentDidMount() {
    const onTabSelected = (event) => {
      if (event.target.className === 'head') {
        this.setState(() => ({ index: event.target.id }));
        if (this.state.prev) {
          this.state.prev.classList.remove('head-active');
        }

        this.state.prev = event.target;
        event.target.classList.add('head-active');
      }
    };

    document.addEventListener('click', onTabSelected);
  }

  render() {
    return (
      <>
        <div>
          {this.props.tabs.map(tab => (
            <div key={tab.id} className="head" id={tab.id}>
              {tab.title}
            </div>
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
