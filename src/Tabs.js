import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { selectedIndex: 0 };

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <section className="tabs">
        {tabs.map((tab, i) => (
          <>
            <button
              type="button"
              key={tab.title}
              onClick={() => {
                this.setState({ selectedIndex: i });
              }}
              className={(
                i === selectedIndex ? 'button button--active' : 'button'
              )}
            >
              { tab.title }
            </button>
          </>
        )) }
        <hr />
        <div className="tab">{ tabs[selectedIndex].content }</div>
      </section>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
