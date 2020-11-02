import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

const App = () => (
  <Container className="p-5">
    <h1 className="text-center">React tabs</h1>
    <Tabs tabs={preparedTabs} />
  </Container>
);

export default App;
