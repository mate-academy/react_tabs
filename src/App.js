import React from 'react';
import './App.scss';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      {
        title: 'Home',
        content:
          'The Russian sample used in the track is taken from a '
          + 'Moscow radio broadcast translation. This is a speech '
          + 'of Russian telepathic Karl Nikolaev. He was sitting in '
          + 'a room trying to guess which item is lying on a table '
          + 'situated in a room two floors above him.',
      },
      { title: 'Profile', content: 'Did you hear this track?' },
      { title: 'Contacts', content: 'You probably should' },
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
