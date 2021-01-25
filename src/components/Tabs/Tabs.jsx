import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    focusedTitle: 'Tab 1',
  }

  handleChange = (title) => {
    this.setState({
      focusedTitle: title,
    });
  }

  render() {
    const { focusedTitle } = this.state;
    const { tabs } = this.props;

    const showingText = tabs.find(tab => tab.title === focusedTitle);

    return (
      <>
        <div>
          {tabs.map(tab => (
            <button
              key={tab.title}
              className="button"
              type="button"
              onClick={() => {
                this.handleChange(tab.title);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="content">
          {showingText.content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
};
