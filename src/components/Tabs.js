import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    active: 0,
  }

  setActiveTab = tabId => this.setState(() => ({
    active: tabId,
  }))

  render() {
    const { tabs, active } = this.state;

    return (
      <>
        <ul className="tab__list">
          {tabs.map(tab => (
            <Tab
              {...tab}
              click={this.setActiveTab}
              key={tab.title}
              active={active}
            />
          ))}
        </ul>
        <section className="tab__content">{tabs[active].content}</section>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
