import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import TabContent from './TabContent';
import './Tabs.scss';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [...this.props.tabs],
      content: this.props.tabs.find(tab => tab.selected),
    };
  }

  selectTab = (e, selectedTab) => {
    e.preventDefault();

    this.setState((prevState) => {
      const tabs = prevState.tabs.map((tab) => {
        if (selectedTab.id !== tab.id && !tab.selected) {
          return tab;
        }

        if (selectedTab.id === tab.id && tab.selected) {
          return tab;
        }

        return {
          ...tab,
          selected: !tab.selected,
        };
      });

      return {
        tabs,
        content: tabs.find(tab => tab.selected),
      };
    });
  };

  render() {
    const { tabs } = this.state;

    return (
      <section className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <Tab
              tab={tab}
              selectTab={this.selectTab}
              key={tab.id}
            />
          ))}
        </ul>
        <TabContent {...this.state.content} />
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
