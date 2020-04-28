import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  handleClick = (index) => {
    this.setState(() => ({
      activeIndex: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            className={
              classNames({
                'btn-active': activeIndex === index,
              })
            }
            type="button"
            key={tab.title}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <div className="text">
          {tabs[activeIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
