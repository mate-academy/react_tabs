import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita labore et sapiente nostrum mollitia voluptatem in vel distinctio maxime animi illum nobis rem, amet odio dolores ea eveniet! Maxime magni animi possimus totam voluptatem! Hic necessitatibus facere aliquid ex et ratione! Repudiandae architecto impedit commodi. Deleniti cupiditate accusantium sed recusandae cumque animi doloribus, in, culpa repellendus porro laboriosam sunt assumenda similique soluta corrupti ducimus rem nisi ipsam perspiciatis reiciendis non?' },
  { id: 'tab-2', title: 'Profile', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptate illum quas sint laboriosam quia deleniti omnis inventore voluptas quidem quis eum debitis odio ab atque exercitationem minima facere laborum accusamus, consequuntur eos cupiditate quaerat porro ducimus? Illo minima quas beatae aliquam sapiente vero delectus voluptates enim repudiandae corporis dignissimos unde eos in similique, consequatur itaque officia aliquid quaerat. Quis.' },
  { id: 'tab-3', title: 'Contant', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro minima corrupti corporis. Ullam officiis molestiae facilis maiores rerum nobis dolorum numquam perferendis porro hic omnis inventore, debitis minus aut commodi a, veritatis corrupti cupiditate fugit ad magnam voluptates ea, quos provident. Eos, vero id tempora vitae excepturi placeat impedit, animi aliquam pariatur dolore libero minima quisquam? Non perspiciatis facere voluptatum minus repellat eius dolor consequuntur dignissimos distinctio corrupti. Error quos dolorum tenetur voluptatibus delectus nulla repellat possimus blanditiis laboriosam.' },
];

interface State {
  selectedTab: Tab;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeTab = (userTab: Tab) => {
    this.setState({
      selectedTab: userTab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          &nbsp;
          {this.state.selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.changeTab}
        />
      </div>
    );
  }
}
