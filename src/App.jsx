import React from 'react';
import { Tabs } from './components/Tabs'
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 'tab-2', title: 'Ornare massa', content: 'Ornare massa eget egestas purus viverra accumsan in. Habitasse platea dictumst vestibulum rhoncus est. Mattis pellentesque id nibh tortor. Eget aliquet nibh praesent tristique magna sit amet. Fames ac turpis egestas sed tempus. Interdum velit laoreet id donec ultrices tincidunt arcu non. Cum sociis natoque penatibus et. Aliquet eget sit amet tellus cras adipiscing. Porttitor lacus luctus accumsan tortor posuere ac ut. Donec ultrices tincidunt arcu non sodales neque sodales.' },
  { id: 'tab-3', title: 'Erat imperdiet', content: 'Erat imperdiet sed euismod nisi porta lorem mollis. Sem viverra aliquet eget sit amet tellus. Pellentesque habitant morbi tristique senectus et. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. A diam sollicitudin tempor id eu nisl nunc mi. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Orci a scelerisque purus semper.' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0].id,
    selectedTitle: tabs[0].title,
  }

  onTab = (id, title) => this.setState({ selectedTab: id, selectedTitle: title})
  
  render () {
    return (
      <div className="App">
        <h1>Selected tab is&nbsp;{this.state.selectedTitle}</h1>
        <Tabs tabs={tabs} selectedTab={this.state.selectedTab} onTab={this.onTab}/>
      </div>
    )
  }
}

