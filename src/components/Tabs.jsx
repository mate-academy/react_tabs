import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    currentIndex: 0,
  }

  selectingTab = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { currentIndex } = this.state;

    return (
      <section>
        <div>
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              onClick={() => this.selectingTab(index)}
              className={classnames('button',
                { 'button--active': currentIndex === index })
              }
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="content">{tabs[currentIndex].content}</p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
