import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 }

  render() {
    const { tabs } = this.props;

    return (
      <div className="button-content">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            className={i === this.state.index ? 'selected' : 'unselected'}
            onClick={() => {
              this.setState({ index: i });
            }}
          >
            {tab.title}
          </button>
        ))}
        <p>{tabs[this.state.index].content}</p>
      </div>
    );
  }
}

Tabs.propTypes
= { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
