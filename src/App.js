import React from 'react';
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

        <nav>
          <ul>
            {tabs.map(tab => (
              <li className={(tab.id === activeId) && 'active-tab'}>
                <a
                  href={`#${tab.title}`}
                  onClick={() => this.clickTab(tab.id)}
                  className={(tab.id === activeId) && 'active-link'}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          {tabs.map(article => (
            <article className={(article.id === activeId) && 'active-article'}>
              <a name={article.title}></a>
              {article.content}
            </article>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
