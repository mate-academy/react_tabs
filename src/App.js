import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

import tabs from './api/tabs';
import posts from './api/posts';

const preparedTabs = tabs.map(tab => ({
  ...tab,
  post: posts.find(post => post.id === tab.postId),
}));

const App = () => (
  <div className="ui container App">
    <h1 className="title">React tabs</h1>
    <Tabs tabs={preparedTabs} />
  </div>
);

export default App;
