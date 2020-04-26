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
    };
  }

  toggleTabs = (e, selectingTab) => {
    e.preventDefault();

    this.setState((prevState) => {
      const tabs = prevState.tabs.map((tab) => {
        if (selectingTab.id !== tab.id && !tab.selected) {
          return tab;
        }

        if (selectingTab.id === tab.id && tab.selected) {
          return tab;
        }

        return {
          ...tab,
          selected: !tab.selected,
        };
      });

      return { tabs };
    });
  };

  render() {
    const { tabs } = this.state;
    const selected = this.state.tabs.find(tab => tab.selected);

    return (
      <section className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <Tab
              tab={tab}
              toggleTabs={this.toggleTabs}
              key={tab.id}
            />
          ))}
        </ul>
        <TabContent {...selected} />
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
