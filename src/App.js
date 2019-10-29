import React from 'react';
import Tabs from './components/tabs/Tabs';

require('./App.css');

function App() {
  return (
    <div>
      <Tabs>
        <div label="Tab 1">
          Some text 1
        </div>
        <div label="Tab 2">
          Some text 2
        </div>
        <div label="Tab 3">
          Some text 3
        </div>
      </Tabs>
    </div>
  );
}

export default App;
