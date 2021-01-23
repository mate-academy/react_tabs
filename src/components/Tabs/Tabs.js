import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    content: this.props.tabs
      .find(tab => (tab.id === this.props.index)).content,
  }

  onTabSelected = (text) => {
    this.setState({
      content: text,
    });
  };

  render() {
    const { tabs } = this.props;

    return (
      <div>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.title}
            onClick={() => {
              this.onTabSelected(tab.content);
            }}
          >
            {tab.title}
          </button>
        ))}

        <p className="tab__text">{this.state.content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
};
