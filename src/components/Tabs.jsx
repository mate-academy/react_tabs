import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { currentIndex } = this.state;

    return (
      <div>
        <div>
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => this.setState({ currentIndex: index })
              }
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {tabs[currentIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Tabs;
