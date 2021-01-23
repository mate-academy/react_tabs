import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        children: PropTypes.arrayOf(PropTypes.shape()),
      }),
    })),
    defaultIndex: PropTypes.number,
    onTabSelected: PropTypes.func.isRequired,
  }

  static defaultProps = {
    children: {},
    defaultIndex: 0,
  }

  state = {
    index: 0,
  }

  componentDidMount = () => {
    const { children, defaultIndex } = this.props;

    const content = children[defaultIndex].props.children;

    this.onTabChange(content, defaultIndex);
  }

  onTabChange = (content, index) => {
    this.setState({ index });

    this.props.onTabSelected(content);
  }

  render() {
    const { index } = this.state;
    const { children } = this.props;

    return (
      <div>
        {children.map((child, tabIndex) => (
          <Tab
            {...child.props}
            key={child.props.title}
            isActive={index === tabIndex}
            index={tabIndex}
            onTabChange={this.onTabChange}
          />
        ))}
      </div>
    );
  }
}
