import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabId: 0,
  }

  selectTab = (event) => {
    this.setState({
      tabId: +event.target.value,
    });
  };

  render() {
    const { tabs } = this.props;
    const { tabId } = this.state;

    return (
      <div>
        {tabs.map((tab, id) => (
          <>
            <button
              type="button"
              onClick={this.selectTab}
              value={id}
              className={id === tabId ? 'selected btn' : 'btn'}
            >
              {tab.title}
            </button>
          </>
        ))}
        <p className="text">
          {tabs[tabId].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
