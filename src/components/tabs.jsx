import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tabs.css';

export class Tabs extends React.Component {
  state = {
    TabIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { TabIndex } = this.state;

    return (
      <div className="Tabs">
        <div className="Tabs__buttons">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              className={
                classNames('tab', { 'tab--active': index === TabIndex })
              }
              onClick={() => {
                this.setState({
                  TabIndex: index,
                });
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <article className="article">
          {tabs[TabIndex].content}
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
};
