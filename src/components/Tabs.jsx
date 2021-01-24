import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    activeTab: '',
  }

  handleChange = (event) => {
    this.props.onClick(event.target.name);
  }

  render() {
    const { tabs } = this.props;

    return (
      tabs.map(tab => (
        <button
          key={tab.title}
          onClick={this.handleChange}
          type="button"
          className="tab"
          name={tab.title}
          id={tab.title}
          value={this.state.activeTab}
        >
          {tab.title}
        </button>
      ))
    );
  }
}

Tabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
