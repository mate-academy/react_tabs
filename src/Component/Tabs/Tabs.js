import React from 'react';
import { Tab } from '../Tab/Tab';
import { ShapeTabs, ShapeTabsDefault } from '../Shapes/ShapeTabs';
import styles from './Tabs.module.css';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  toggleTab = index => () => {
    this.setState(() => ({
      activeTab: index,
    }));
  }

  // changeChildrenProps() {
  //   return this.props.children.map((child, index) => ({
  //     ...child,
  //     props: {
  //       ...child.props,
  //       toggle: this.toggleTab(index),
  //       toggleClass: index === this.state.activeTab,
  //     },
  //   }));
  // }

  // renderComponentTab() {
  //   return this.props.tabs.map((child, index) => (
  //     <Tab
  //       key={index.toString()}
  //       title={child.title}
  //       toggle={this.toggleTab(index)}
  //       toggleClass={index === this.state.activeTab}
  //     />
  //   ));
  // }

  renderTabsContent(tabs) {
    return tabs.map((tab, index) => (
      <li
        key={index.toString()}
        className={this.state.activeTab === index
          ? styles.active
          : styles.nonactive}
      >
        {tab.content ? tab.content : tab.props.children}
      </li>
    ));
  }

  render() {
    const { children, tabs } = this.props;

    return (
      <div className={styles.tabsList}>
        <div className={styles.tabs}>
          {(this.props.children.length !== 0
            ? this.props.children.map((child, index) => ({
              ...child,
              props: {
                ...child.props,
                toggle: this.toggleTab(index),
                toggleClass: index === this.state.activeTab,
              },
            }))
            : this.props.tabs.map((child, index) => (
              <Tab
                key={index.toString()}
                title={child.title}
                toggle={this.toggleTab(index)}
                toggleClass={index === this.state.activeTab}
              />
            )))
          }
        </div>
        <div className={styles.tabs}>
          {this.props.children.length !== 0
            ? children[this.state.activeTab].props.children
            : tabs[this.state.activeTab].content}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = ShapeTabsDefault;

Tabs.propTypes = ShapeTabs.isRequired;
