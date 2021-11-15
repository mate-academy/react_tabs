import React from 'react';

import './App.scss';
import { Tabs } from './componets/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum ad facilis, sed ea in possimus earum voluptatum impedit numquam corporis ducimus eum. Adipisci quas eos obcaecati laudantium numquam unde.' },
  { id: 'tab-2', title: 'Profile', content: 'Earum, inventore mollitia. Consectetur tempore labore, dolore molestiae in exercitationem iusto nulla. Qui explicabo at ipsa animi voluptatibus? Quos eligendi deleniti ab numquam suscipit enim modi, inventore earum ipsa nobis? Mollitia natus quaerat, earum ab error dolorum! Atque dolore ut deserunt, fuga sapiente iure obcaecati natus enim quibusdam unde aspernatur, dignissimos commodi quasi consequuntur officiis eligendi numquam porro voluptatibus facilis!' },
  { id: 'tab-3', title: 'Contact', content: 'A minima iusto magnam architecto blanditiis nulla sit amet, quibusdam quas sapiente aliquam consequuntur voluptates possimus placeat ea ad laborum? Libero nostrum delectus voluptatibus a cupiditate dolore saepe cum blanditiis?Ad repellendus incidunt delectus inventore asperiores laborum in natus, possimus, atque minima, esse tempore officia odio ab nobis repudiandae architecto? Cumque amet earum, praesentium veritatis quis adipisci corrupti nobis doloremque. Aspernatur ad, dolorum sunt, repellat officia voluptate id vitae doloremque saepe et in, exercitationem rerum totam? Pariatur eligendi a, minima mollitia quidem odio quos est laborum reprehenderit voluptatibus dolorem laboriosam. Consequatur reprehenderit sint cumque optio temporibus qui, in at ipsum aliquam dolorum iste nesciunt nihil similique non deleniti dolore a ab enim quia assumenda excepturi expedita quo error aperiam. Alias. Esse maiores quod excepturi exercitationem facilis debitis, consequatur unde, quia rem, nobis animi inventore ad omnis autem a at aliquam quaerat sequi vitae numquam nam deleniti itaque. Ea, quaerat nisi. Dolore rem voluptatem omnis, voluptas ab alias, officiis facere hic, at ad quisquam earum placeat eum! Vitae magni eligendi voluptas, illo cupiditate totam dolorum eum culpa. Consectetur animi possimus ullam.' },
];

interface State {
  selectedTab?: Tab
}

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  selectTab = (tab: Tab) => {
    const { selectedTab } = this.state;

    if (selectedTab.id !== tab.id) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is: ${selectedTab.title}`}</h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}
