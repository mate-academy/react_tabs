import React from 'react';
import './App.css';
import { Tab, Grid } from 'semantic-ui-react';
import CreatingTabs from './component/CreatingTabs';

class App extends React.Component {

  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const tabsList = [];
    this.state.tabs.forEach(tab => {
      tab.menuItem = tab.title;
      tab.render = function() {
        return <Tab.Pane attached={false}>{tab.content}</Tab.Pane>
      };
      tabsList.push(tab);
    });

    return (
      <Grid centered>
        <Grid.Column width={10}>
          <CreatingTabs panes={tabsList}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
