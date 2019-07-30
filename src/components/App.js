import React from 'react';
import '../App.css';

import Tabs from './Tabs';

const App = () => (
  <>
    <Tabs>
      <Tabs.Tab title="title 3">
        <Tabs>
          <Tabs.Tab title="TitleInside">Some Content</Tabs.Tab>
        </Tabs>
      </Tabs.Tab>
      <Tabs.Tab title="title 1">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Tabs.Tab>
    </Tabs>
  </>
);

export default App;
