import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';
import { Button } from './button/button';

export class Tabs extends React.Component {
  state = {
    TabIndex: 0,
  }

  ChangeTabIndex = (index) => {
    this.setState({
      TabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { TabIndex } = this.state;

    return (
      <div className="Tabs">
        <div className="Tabs__buttons">
          {tabs.map((tab, index) => (
            <Button
              tab={tab}
              index={index}
              ChangeTabIndex={this.ChangeTabIndex}
              TabIndex={TabIndex}
            />
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
