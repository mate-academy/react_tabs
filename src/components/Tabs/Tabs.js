import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// eslint-disable-next-line no-unused-vars
class Tabs extends React.Component {
  onTabSelected;

  constructor(props) {
    super(props);

    this.state = {
      tabs: props.tabs,
      activeIndex: 0,
    };

    this.onTabSelected = () => {

    };
  }

  render() {
    return (
      <div>
        <h1>
          React tabs
        </h1>

        <ul className="list">
          {this.state.tabs.map((tab, index) => (
            <li
              key={tab.title}
              className={
                ClassNames(
                  'list__item',
                  { active: index === this.state.activeIndex },
                )
              }
            >
              <a href="/" onClick={() => this.setState({ activeIndex: index })}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>

        {this.state.tabs[this.state.activeIndex].content}
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
