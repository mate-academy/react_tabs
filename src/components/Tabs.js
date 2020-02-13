import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    contentNum: this.props.index,
  };

  onTabSelected = (event) => {
    const heading = document.querySelector('.button__heading--active');
    const { target } = event;

    if (heading !== target) {
      const index = target.dataset.number;

      heading.classList.remove('button__heading--active');
      target.classList.add('button__heading--active');

      this.setState({
        contentNum: index,
      });
    }
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.props;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            className={
              (index === i)
                ? 'button__heading button__heading--active'
                : 'button__heading'
            }
            data-number={i}
            onClick={this.onTabSelected}
          >
            {tab.title}
          </button>
        ))}
        <div className="tab__content">
          {tabs[this.state.contentNum].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number,
};

Tabs.defaultProps = {
  index: 0,
};

export default Tabs;
