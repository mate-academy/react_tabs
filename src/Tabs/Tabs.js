import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    selectedTab: 0,
  }

  onTabsSelected = (index) => {
    this.setState({
      selectedTab: index,
    });
  }

  render() {
    const { table } = this.props;

    return (
      <div className="table__content">
        <h1>React tabs</h1>
        <div className="buttons">
          {table.map((tab, indexOfTab) => (
            <button
              type="button"
              key={tab.title}
              onClick={() => this.onTabsSelected(indexOfTab)}
              className={indexOfTab === this.state.selectedTab
                ? 'btn btn--selected'
                : 'btn'}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p>
          {table[this.state.selectedTab].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  table: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
