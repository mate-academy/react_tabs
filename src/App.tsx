import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabsFromServer: Tab[] = [
  { id: 'home', title: 'Home', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a doloribus rerum ea reprehenderit non suscipit laborum est, autem soluta dicta iusto totam, quidem iste velit corrupti. Eius sint, libero non provident officia distinctio ipsam omnis, atque culpa facere cumque voluptatem odit animi deleniti cupiditate in quam autem, nobis ut rerum. Voluptas aperiam dolorum assumenda dolor incidunt totam ea quis quos odit hic, numquam dolores, nisi cum aliquam! Delectus natus id minima nobis cum sapiente repellendus sed sit velit quia deleniti, voluptas ullam. Dicta maxime, harum reiciendis tempore, ab qui voluptatibus minus eum et deleniti quod laudantium! Necessitatibus fuga enim, voluptatem similique, voluptate eveniet facilis dicta error doloribus dolorum repudiandae hic velit temporibus. Voluptate, reprehenderit maiores pariatur ut, nulla tempora ipsum vitae dignissimos laborum iste, similique quaerat temporibus.' },
  { id: 'profile', title: 'Profile', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim doloremque repellendus laudantium. At quibusdam illo pariatur vitae quidem labore omnis dolorum quaerat. Facilis beatae dolor expedita corrupti distinctio necessitatibus debitis qui dolores velit, dolore sint vero, at cum porro dignissimos impedit ipsum mollitia assumenda asperiores cumque non sit doloremque. Eveniet dolorem totam commodi quasi, eum recusandae velit molestias voluptate accusamus vel esse sed debitis omnis eius deserunt ut cum earum architecto nisi ratione quam dignissimos, tenetur harum? Voluptate ipsum suscipit facilis minima fuga ab error iste deleniti dolor esse laudantium facere sed earum, numquam eaque dolorem doloremque aperiam vitae. Similique illum amet eos corporis cupiditate fugiat atque dolore, sapiente id. Pariatur maiores illum voluptatem, commodi voluptatum voluptatibus quibusdam sed doloremque dignissimos facilis veniam ipsum cumque molestiae, facere sit magnam enim consequuntur, itaque mollitia sunt delectus placeat eveniet quidem? Aliquam illo, explicabo quo quos consequatur ipsa fugit impedit laudantium, commodi magnam delectus!' },
  { id: 'contact', title: 'Contact', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nesciunt eaque laboriosam explicabo, facilis quae adipisci unde. Sit veritatis blanditiis atque, est odit rerum praesentium molestias laborum doloribus, iusto nam! Ab aliquid quos odio velit nobis autem quaerat cum deleniti commodi voluptatibus, optio eum sed quasi dolorum necessitatibus cupiditate labore ipsum. Obcaecati, sunt!' },
];

type State = {
  tabs: Tab[],
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state = {
    tabs: tabsFromServer,
    selectedTabId: tabsFromServer[0].id,
  };

  select = (id: string) => {
    this.setState({
      selectedTabId: id,
    });
  };

  render() {
    const selectedTitle = this.state.tabs.find(tab => tab.id === this.state.selectedTabId)?.title;

    return (
      <div className="app">
        <h1 className="title">
          {`Selected tab is ${selectedTitle} `}
        </h1>
        <div className="wrapper">
          <Tabs
            tabs={this.state.tabs}
            selectedTabId={this.state.selectedTabId}
            select={this.select}
          />
        </div>
      </div>
    );
  }
}

export default App;
