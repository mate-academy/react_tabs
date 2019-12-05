import React from 'react';
import './App.css';
import Tabs from './Tabs';

const text1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Culpa dolores earum eligendi, est excepturi expedita fuga harum ipsa 
  laborum minima perferendis quam quos ratione reiciendis, 
  rerum suscipit tempora tempore voluptatum!`;

const text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Aperiam at consequatur deleniti, doloribus error harum, impedit iusto magnam 
  nostrum officiis perferendis ratione reprehenderit repudiandae 
  sint sit suscipit tempora vel vitae!`;

const text3 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Deserunt dolore ducimus, est ex excepturi ipsum libero natus praesentium, 
  quia, quos repellat rerum sequi sit ullam unde veniam vitae voluptatum? 
  Excepturi?`;

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Home', content: text1 },
      { title: 'Profile', content: text2 },
      { title: 'Contact', content: text3 },
    ],
    indexOfActiveTab: 0,
  };

  onTabSelected = (i) => {
    this.setState({ indexOfActiveTab: i });
  };

  render() {
    const { tabs, indexOfActiveTab } = this.state;

    return (
      <Tabs
        tabsList={tabs}
        activeIndex={indexOfActiveTab}
        onTabSelected={this.onTabSelected}
      />
    );
  }
}

export default App;
