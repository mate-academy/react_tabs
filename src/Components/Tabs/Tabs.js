import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';

export class Tabs extends React.PureComponent {
  state = {
    indexOfTab: 0,
  };

  selectedTab = (passedIndex) => {
    this.setState({
      indexOfTab: passedIndex,
    });
  };

  render() {
    const { tabs } = this.props;
    const { indexOfTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__list">
          {tabs.map(tab => (
            <button
              key={tab.title}
              className={tabs.indexOf(tab) === indexOfTab
                ? 'button button--active'
                : 'button'}
              type="button"
              onClick={() => {
                const passedIndex = tabs.indexOf(tab);

                this.selectedTab(passedIndex);
              }}
            >
              <Tab tabTitle={tab.title} />
            </button>
          ))}
        </div>
        <div className="tabs__content">{tabs[indexOfTab].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
