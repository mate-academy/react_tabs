import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {
  state = {
    selectedTab: this.props.index,
  }

  onTabSelected = (e) => {
    this.setState({
      selectedTab: this.props.tabs
        .findIndex(tab => tab.title === e.target.textContent),
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;

    return (
      <div>
        {
          tabs.map((tab, i) => (
            <button
              type="button"
              className={classNames('tabs', { active_tab: +selectedTab === i })}
              key={tab.title}
              onClick={this.onTabSelected}
            >
              {tab.title}
            </button>
          ))
        }
        <article className="tab_content">
          { tabs[selectedTab].content }
        </article>
      </div>
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
