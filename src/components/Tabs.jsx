import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedTabIndex: this.props.id,
    selectedTabContent: this.props.tabs[this.props.id].content,
  }

  onTabSelected = (id, content) => (
    this.setState(() => ({
      selectedTabIndex: id,
      selectedTabContent: content,
    }))
  );

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;

    return (
      <>
        <div className="ui tabular menu">
          {tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              data-value={tab.title}
              className={selectedTabIndex === tab.id ? 'item active' : 'item'}
              onClick={() => {
                this.onTabSelected(tab.id, tab.content);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="content">
          {this.state.selectedTabContent}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  id: PropTypes.number.isRequired,
};
