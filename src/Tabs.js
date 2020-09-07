import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (i) => {
    this.setState({ index: i });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            type="button"
            onClick={() => this.onTabSelected(i)}
            key={tab.title}
          >
            {tab.title}
          </button>
        ))}
        <div>{tabs[index].content}</div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
