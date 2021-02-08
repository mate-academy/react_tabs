import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', 
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis eu non. Turpis egestas integer eget aliquet nibh. Ut aliquam purus sit amet luctus venenatis lectus. Mauris sit amet massa vitae tortor condimentum lacinia. Scelerisque felis imperdiet proin fermentum leo vel. Viverra nam libero justo laoreet sit amet. Sit amet est placerat in egestas erat imperdiet. Viverra orci sagittis eu volutpat odio. At ultrices mi tempus imperdiet. Odio ut enim blandit volutpat maecenas volutpat blandit.' },
  { id: 'tab-2', title: 'Tab 2', 
  content: 'Cras fermentum odio eu feugiat. Amet tellus cras adipiscing enim eu turpis. Id neque aliquam vestibulum morbi blandit. Purus sit amet volutpat consequat mauris. Metus aliquam eleifend mi in. Sed id semper risus in hendrerit gravida rutrum quisque non. Viverra aliquet eget sit amet tellus cras. Arcu cursus vitae congue mauris rhoncus. Odio morbi quis commodo odio aenean. Velit aliquet sagittis id consectetur purus ut. Sed sed risus pretium quam vulputate dignissim.' },
  { id: 'tab-3', title: 'Tab 3', 
  content: 'Placerat duis ultricies lacus sed turpis tincidunt. Pellentesque elit eget gravida cum sociis natoque. Eros donec ac odio tempor orci dapibus ultrices in. Sodales ut etiam sit amet. Vitae turpis massa sed elementum tempus egestas sed sed. In nulla posuere sollicitudin aliquam ultrices. Eget duis at tellus at urna condimentum mattis pellentesque. Hendrerit dolor magna eget est lorem ipsum dolor. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Vivamus at augue eget arcu dictum varius duis. Odio tempor orci dapibus ultrices in. Et egestas quis ipsum suspendisse ultrices gravida dictum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Tellus id interdum velit laoreet. Tellus mauris a diam maecenas sed. Fermentum et sollicitudin ac orci phasellus egestas. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Magna eget est lorem ipsum dolor sit. Auctor neque vitae tempus quam.' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onSelect = (selectedTab) => {
    if (selectedTab === this.state.selectedTab) {
      return;
    }

    this.setState({ selectedTab: tabs.find(tab => tab.id === selectedTab.id) });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          selectedTab={selectedTab}
          tabs={tabs}
          onSelect={this.onSelect}
        />
        <div className="text">
          <p>{selectedTab.content}</p>
        </div>
      </div>
    );
  }
}

export default App;
