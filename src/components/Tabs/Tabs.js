import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onTabSelected = (content) => {
    this.setState({
      content,
    });
  }

  toggleActiv = (e) => {
    if (this.currentActiv) {
      this.currentActiv.classList.remove('activ');
    }

    e.target.classList.add('activ');

    this.currentActiv = e.target;
  }

  render() {
    const { content } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.title}
              title={tab.title}
              content={tab.content}
              tabIndex={tab.tabIndex}
              onTabSelected={this.onTabSelected}
              toggleActiv={this.toggleActiv}
            />
          ))}
        </ul>
        <article>
          {content}
        </article>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
