/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    selectedItem: 0,
  };
  selectedTab = (event) => {
    const { id } = event.target.dataset;
    this.setState({
      selectedItem: id,
    });
    this.props.selectTab(id);
  };

  componentDidMount() {
    this.props.selectTab(0);
  }

  render() {
    const { tabs } = this.props;
    const { selectedItem } = this.state;
    return (
      <div className="tabs__head">
        {tabs.map(tab => (
          <div
            className={`tabs__single-tab
           ${tab.id === Number(selectedItem)
            ? 'tabs__single-tab--active'
            : ''}`}
            key={tab.id}
            data-id={tab.id}
            onClick={this.selectedTab}
          >
            {tab.title}
          </div>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
