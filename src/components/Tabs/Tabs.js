import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './Tabs.scss';

class Tabs extends PureComponent {
  state = {
    activeTab: 0,
  }

  handleClick(id) {
    this.setState({ activeTab: id });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <section className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              content={tab}
              activeTab={activeTab}
              callback={id => this.handleClick(id)}
            />
          ))}
        </ul>
        <div className="tabs__content">
          {tabs[activeTab].content}
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
