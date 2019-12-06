import React from 'react';
import PropTypes from 'prop-types';

class TabList extends React.Component {
  state = { activeTabIndex: 0 }

  render() {
    const { activeTabIndex } = this.state;

    const onTabSelected = (i) => {
      this.setState(() => ({ activeTabIndex: i }));
    };

    return (
      <article className="tab-list">
        {this.props.tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => {
              onTabSelected(i);
            }}
            className={i === activeTabIndex
              ? 'tab-list__tab--title active-tab'
              : 'tab-list__tab--title'}
          >
            {tab.title}
          </button>
        ))}
        <>
          <div className="tab-list__tab--current-content">
            {this.props.tabs[activeTabIndex].content}
          </div>
        </>

      </article>
    );
  }
}

TabList.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object) };
TabList.defaultProps = { tabs: [] };
export default TabList;
