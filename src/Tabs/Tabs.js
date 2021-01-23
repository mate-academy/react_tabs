import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            type="button"
            className={`Tab__tab
              ${index === i ? 'active' : ''}
            `}
            key={tab.title}
            onClick={() => {
              this.onTabSelected(i);
            }}
          >
            {tab.title}
          </button>
        ))}

        <div className="Tab__content">
          {tabs[this.state.index].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
};
