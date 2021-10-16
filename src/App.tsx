import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore labore laboriosam perferendis porro quisquam tempore ullam ut voluptatum! Adipisci autem corporis cum eaque eligendi excepturi explicabo, ipsa iste laudantium minima neque nobis perferendis porro, quo, sapiente tempora voluptatibus? A ad alias animi aperiam architecto asperiores at delectus dicta doloremque dolores doloribus eligendi enim esse eum excepturi explicabo facere fugiat harum illo inventore laborum minima necessitatibus neque nesciunt nihil nobis non odio perferendis porro possimus quaerat quam, totam ut vero vitae voluptate voluptatum. At doloribus excepturi illo illum impedit molestiae nobis quam quas soluta unde vitae voluptate, voluptatem. Dolorem.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores atque deleniti eos, est, ex explicabo molestias nemo nobis porro quaerat quas quos sit sunt ullam unde voluptate. Consectetur culpa expedita fuga quasi quis repellat! Architecto assumenda aut cum delectus dolore, eaque inventore ipsum laudantium libero modi nesciunt, non optio placeat porro quam quidem sed similique unde vel veritatis! Aliquam aspernatur assumenda consequatur culpa cumque ea eius eos esse inventore ipsam ipsum, molestias, numquam quos reiciendis reprehenderit sit voluptatibus. Aut culpa cum distinctio dolores eligendi enim explicabo, illo inventore libero mollitia nam numquam odio pariatur qui, rem saepe vel, vitae' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos dolore dolorum et, eveniet excepturi in, ipsa maxime molestiae mollitia quaerat voluptas voluptatem. Consectetur deleniti dolorum enim pariatur perferendis porro saepe sint. Delectus earum enim, est explicabo inventore obcaecati quod soluta. Aperiam minima placeat tempora ut veniam. Aperiam atque cum dolorem, earum est facere, fugiat fugit ipsa ipsam molestiae nemo nostrum perspiciatis quaerat quam quasi quis, quisquam quos reiciendis sapiente sequi sit vel vero voluptatibus. Accusamus consequuntur doloribus facere facilis fugit nihil numquam quidem repellat. Atque iure labore numquam odio. Aspernatur assumenda, et impedit maiores non ratione ullam veo voluptas' },
];

type State = {
  selectedTab: Tab | undefined;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeTab = (id: string) => {
    if (id === this.state.selectedTab.id) {
      return;
    }

    this.setState({ selectedTab: tabs.find(tab => tab.id === id) });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{`Selected tab is: ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          onTabSelected={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
