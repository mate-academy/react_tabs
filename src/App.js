import React from 'react';
import Navigation from './Navigation';
import ArticlesGroup from './ArticlesGroup';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    activeId: 1,
  };

  componentDidMount() {
    let tabId = 0;

    this.setState(prevState => ({
      tabs: prevState.tabs.map((tab) => {
        tabId++;

        return (
          { ...tab, id: tabId }
        );
      }),
    }));
  }

  clickTab(id) {
    this.forceUpdate();
    this.setState({
      activeId: id,
    });
  }

  render() {
    const { tabs, activeId } = this.state;

    return (
      <div className="App">
        <Navigation tabs ={tabs} activeId={activeId} clickTab={this.clickTab}/>
        <ArticlesGroup tabs ={tabs} activeId={activeId}/>
      </div>
    );
  }
}

export default App;
