import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  onTabSelected = (selectedTabIndex) => {
    this.setState({
      selectedTabIndex,
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;

    return (
      <>
        {tabs.map((tab, i) => {
          const tabClasses = classNames({
            Tab__tab: true,
            active: selectedTabIndex === i,
          });

          return (
            <button
              type="button"
              className={tabClasses}
              key={tab.title}
              onClick={() => {
                this.onTabSelected(i);
              }}
            >
              {tab.title}
            </button>
          );
        })}

        <div className="Tab__content">
          {tabs[this.state.selectedTabIndex].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
};
