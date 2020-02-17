import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '../Content/Content';

class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      tabIndex: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => this.onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))}
        <Content text={tabs[tabIndex]} />
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
