import React from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi. In aliquam sem fringilla ut morbi tincidunt. Integer quis auctor elit sed vulputate. In metus vulputate eu scelerisque felis imperdiet. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Tempus urna et pharetra pharetra. At erat pellentesque adipiscing commodo elit at imperdiet. Mauris vitae ultricies leo integer malesuada. Risus ultricies tristique nulla aliquet enim. Sed arcu non odio euismod lacinia at quis risus sed. Erat velit scelerisque in dictum.'},
  { id: 'tab-2', title: 'Profile', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut. Duis at tellus at urna condimentum mattis pellentesque id. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit eget gravida cum sociis natoque penatibus et magnis dis. Lectus quam id leo in vitae turpis massa sed. Diam sit amet nisl suscipit adipiscing bibendum. Volutpat diam ut venenatis tellus in. Scelerisque eleifend donec pretium vulputate sapien nec. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Auctor elit sed vulputate mi sit. Lorem ipsum dolor sit amet consectetur adipiscing.' },
  { id: 'tab-3', title: 'Contact', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Felis eget nunc lobortis mattis. Et molestie ac feugiat sed lectus vestibulum mattis. Tortor posuere ac ut consequat semper viverra. Purus ut faucibus pulvinar elementum. Ac turpis egestas sed tempus urna. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Mauris pharetra et ultrices neque ornare aenean euismod. Sed nisi lacus sed viverra tellus in hac. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. In massa tempor nec feugiat nisl. Ligula ullamcorper malesuada proin libero nunc. Felis imperdiet proin fermentum leo vel orci porta non. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Amet justo donec enim diam vulputate ut pharetra sit amet. Egestas sed sed risus pretium. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Eget nullam non nisi est sit amet facilisis.' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState({ selectedTab: tab });
  }

  render() {
    const { selectedTab } = this.state;
    const { onTabSelected } = this;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
        />
      </div>
    );
  }
}

export default App;
