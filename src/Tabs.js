import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activTitle: 'Tab 1',
  };

  changeTitle = (value) => {
    this.setState({ activTitle: value });
  }

  render() {
    const { tabs } = this.props;
    const { activTitle } = this.state;

    return (
      <div>
        {tabs.map(tab => (
          <button
            className="button"
            key={tab.title}
            type="button"
            onClick={() => {
              this.changeTitle(tab.title);
            }}
          >
            {tab.title}
          </button>
        ))}
        <div className="content">
          {tabs.find(tab => tab.title === activTitle).content}
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
