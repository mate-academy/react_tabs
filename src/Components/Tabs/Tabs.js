import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import TabContent from './TabContent';
import './Tabs.scss';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: this.props.tabs[0].id,
      tabs: [...this.props.tabs],
    };
  }

  selectTab = (id) => {
    this.setState(() => {
      const { tabs } = this.state;

      return {
        activeTabId: id,
        content: tabs.find(tab => tab.id === id),
      };
    });
  };

  render() {
    const { tabs, activeTabId } = this.state;

    return (
      <section className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <Tab
              tab={tab}
              activeTabId={activeTabId}
              selectTab={this.selectTab}
              key={tab.id}
            />
          ))}
        </ul>
        <TabContent
          {...tabs.find(tab => tab.id === activeTabId)}
        />
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Tabs;
