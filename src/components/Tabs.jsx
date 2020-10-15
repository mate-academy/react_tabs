import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: this.props.index,
  };

  onTabSelected = (event) => {
    const index = this.props.tabs.findIndex(
      element => element.title === event.target.innerText,
    );

    this.setState({
      index,
    });
  }

  render() {
    const { index } = this.state;
    const { tabs } = this.props;

    return (
      <>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.title}
            onClick={this.onTabSelected}
          >
            {tab.title}
          </button>
        ))}
        <p>{tabs[index].content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  index: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
    }),
  ).isRequired,
};
