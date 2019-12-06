import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const AuthorName = `Charles Lutwidge Dodgson —
                    [ Lewis Carroll ]
                    27 January 1832 – 14 January 1898`;
const BookTitle = `"Alice's Adventures in Wonderland"`;
const BookQuote = `“Would you tell me,
  please, which way I ought to go from here?”
  That depends a good deal on where you want to get to,” said the Cat.
  I don’t much care where—” said Alice.
  “Then it doesn’t matter which way you go,” said the Cat.
  “—so long as I get somewhere,” Alice added as an explanation.
  — Oh, you’re sure to do that,” said the Cat,
  “if you only walk long enough.” `;

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
