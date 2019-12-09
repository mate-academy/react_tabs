import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { curIndex: 0 }

  render() {
    const { tabs } = this.props;
    const { curIndex } = this.state;

    return (
      <div className="wrapper">
        {
          tabs.map((tab, i) => (
            <button
              type="button"
              key={tab.title}
              onClick={
                () => {
                  this.setState({ curIndex: i });
                }
              }
              className={
                (
                  curIndex === i ? 'button--active' : 'button')
              }
            >
              {tab.title}
            </button>
          ))
        }
        <div className="content">
          {tabs[curIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
