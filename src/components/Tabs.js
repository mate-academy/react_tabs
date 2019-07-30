import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  static Tab = ({ children }) => children ;

  state = {
    selectedTab: 0,
  };

  handleClick = (event, selectedIndex) => {
    event.preventDefault();

    this.setState({
      selectedTab: selectedIndex,
    });
  };

  render() {
    let { children } = this.props;

    children = children.length ? children : [children];

    return (
      <div className="tabs">
        <ul className="tabs-links">
          {
            children.map((child, index) => {
              const classes = classNames({
                'tabs-links__item': true,
                'tabs-links__item--selected': index === this.state.selectedTab,
              });

              return (
                <li className={classes}>
                  <a
                    href="/"
                    onClick={event => this.handleClick(event, index)}
                  >
                    {child.props.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
        <div className="tabs-content">
          {
            children[this.state.selectedTab]
          }
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
