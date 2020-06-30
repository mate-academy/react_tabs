import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    selectedIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, i) => (
          <>
            <button
              type="button"
              key={tab.id}
              onClick={() => {
                this.setState({
                  selectedIndex: i,
                });
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
        <div>
          { tabs[selectedIndex].content }
        </div>
      </div>
    );
  }
}

const TabShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  is: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: TabShape.isRequired,
};

export { Tabs };
