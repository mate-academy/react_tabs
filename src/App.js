import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const AuthorName = `Charles Lutwidge Dodgson ~
                    Lewis Carroll ~
                    [27 January 1832 – 14 January 1898]`;
const BookTitle = `|| Alice's Adventures in Wonderland ||`;
const BookQuote = `*It takes all the running you can do, to
  keep in the same place. If you want to get somewhere else,
  you must run at least twice as fast as that!`;

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Author', content: AuthorName },
      { title: 'Book', content: BookTitle },
      { title: 'Quote', content: BookQuote },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
