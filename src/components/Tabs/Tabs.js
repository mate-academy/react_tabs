import React from 'react';
import { Tab } from '../Tab';
import { Nav, Alert } from 'react-bootstrap';
import cn from 'classnames';
import './Tabs.scss'

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  }

  selectTab = (tabId) => {
    this.setState({currentTab: tabId,});
  }

  render() {
    const { tabs, children } = this.props;
    console.log(children);
    if(tabs){
      return(
        <>
          <Nav variant="tabs">
            {tabs.map(tab =>
                <Tab
                  key={tab.id}
                  {...tab}
                  className= {
                    cn(
                      'tab',
                      { 'tab--active': tab.id === this.state.currentTab},
                    )
                  }
                  clickHandler={this.selectTab}
                />
                )
              }
          </Nav>
          <Alert key={0} variant="danger">
            {tabs[this.state.currentTab].content}
          </Alert>
        </>
      )
    } else {
      return (
        <>
          <Nav variant="tabs">
            {children.map((child, index) =>
              <Tab
                key={index}
                {...child.props}
                id={index}
                className= {
                  cn(
                    'tab',
                    { 'tab--active': index === this.state.currentTab},
                  )
                }
                clickHandler={this.selectTab}
              />)}
          </Nav>
          <Alert key={0} variant="danger">
            {children[this.state.currentTab].props.children}
          </Alert>
        </>
      )
    }
  }
}
