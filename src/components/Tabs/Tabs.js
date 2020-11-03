import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Alert } from 'react-bootstrap';
import cn from 'classnames';
import { Tab } from '../Tab';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  }

  selectTab = (tabId) => {
    this.setState({ currentTab: tabId });
  }

  returnTab = (tab, id) => (
    <Tab
      key={tab.id}
      id={id}
      {...tab}
      className={
        cn(
          'tab',
          { 'tab--active': id === this.state.currentTab },
        )
      }
      clickHandler={this.selectTab}
    />
  )

  render() {
    const { tabs, children } = this.props;

    return (
      <>
        <Nav variant="tabs">
          {tabs && tabs.map(tab => this.returnTab(tab, tab.id))}
          {children && children.map(child => this
            .returnTab(child.props, children.indexOf(child)))}
        </Nav>

        <Alert key={0} variant="danger">
          {children && children[this.state.currentTab].props.children}
          {tabs && tabs[this.state.currentTab].content}
        </Alert>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.object),
};

Tabs.defaultProps = {
  tabs: undefined,
  children: undefined,
};
