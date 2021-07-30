import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './Tabs.css';

export default class Tabs extends Component {
  state={
    index: this.props.selectedTab,
  }

  toggleTab = (id) => {
    this.setState(prevSate => ({
      index: id,
    }));

    this.props.onTabSelectes(id);
  };

  render() {
    const tabsWithKey = this.props.tabs.map(tab => ({
      key: uuidv4(),
      ...tab,
    }));

    return (
      <div className="container">
        <div className="bloc-tabs">
          {tabsWithKey.map(({ key, id, title, content }) => (
            <button
              key={key}
              value={id}
              type="button"
              className={this.state.index === id ? 'tabs active-tabs' : 'tabs'}
              onClick={() => this.toggleTab(id, content)}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="content-tabs">
          {tabsWithKey.map(({ key, id, title, content }) => (
            <div
              value={id}
              className={this.state.index === id
                ? 'content active-content'
                : 'content'}
            >
              <h2>{content}</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur
                daipisicing elit. Obcaecati praesentium
                incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.func.isRequired,
  onTabSelectes: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
