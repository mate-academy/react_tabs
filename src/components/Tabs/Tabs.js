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

  render() {
    const { tabs, children } = this.props;

    if (tabs) {
      return (
        <>
          <Nav variant="tabs">
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                {...tab}
                className={
                  cn(
                    'tab',
                    { 'tab--active': tab.id === this.state.currentTab },
                  )
                }
                clickHandler={this.selectTab}
              />
            ))}
          </Nav>
          <Alert key={0} variant="danger">
            {tabs[this.state.currentTab].content}
          </Alert>
        </>
      );
    }

    return (
      <>
        <Nav variant="tabs">
          {children.map((child) => {
            const id = children.indexOf(child);

            return (
              <Tab
                key={id}
                {...child.props}
                id={id}
                className={
                  cn(
                    'tab',
                    { 'tab--active': id === this.state.currentTab },
                  )
                }
                clickHandler={this.selectTab}
              />
            );
          })}
        </Nav>
        <Alert key={0} variant="danger">
          {children[this.state.currentTab].props.children}
        </Alert>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
