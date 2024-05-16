import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  state = {
    index: this.props.startIndex,
    activeContent: null,
    activeTitle: null,
  }

  componentDidMount() {
    const { index } = this.state;
    const { children } = this.props;

    this.setState({
      activeContent: children[index].props.children,
      activeTitle: children[index].props.title,
    });
  }

  selectTab = (content, title) => {
    this.setState({
      activeContent: content,
      activeTitle: title,
    });
  }

  render() {
    const { children } = this.props;
    const { activeContent, activeTitle } = this.state;

    return (
      <>
        <nav className="app__tabs">
          {
            children.map(child => ({
              ...child,
              props: {
                ...child.props,
                handleClick: this.selectTab,
                isActive: activeTitle === child.props.title,
              },
            }))
          }
        </nav>
        <p className="app__content">
          {activeContent}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element.isRequired,
  ),
  startIndex: PropTypes.number,
};

Tabs.defaultProps = {
  startIndex: 0,
  children: [],
};
