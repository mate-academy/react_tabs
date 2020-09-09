import React, { useState } from 'react';
import './App.scss';
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

const prepTabs = tabs.map((tab, i) => ({
  ...tab,
  index: i,
}));

const App = () => {
  const [active, setActive] = useState(0);

  const handleButton = (i) => {
    setActive(i);
  };

  return (
    <>
      <Tabs
        tabs={prepTabs}
        handleButton={handleButton}
        active={active}
      />
      <section className="tab__content">
        {prepTabs[active].content}
      </section>
    </>
  );
};

export default App;
