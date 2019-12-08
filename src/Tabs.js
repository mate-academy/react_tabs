import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 };

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="wrapper">
        {tabs.map((tab, i) => (
          <>
            <button
              type="button"
              key={tab.title}
              onClick={() => {
                this.setState({ index: i });
              }}
              className={(
                i === index ? 'button--active' : 'button')
              }
            >
              {tab.title}
            </button>
          </>
        ))}
        <div className="content">{tabs[index].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
