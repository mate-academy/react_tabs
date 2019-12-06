import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: `Are you depressed? Then take of bhang one grain,
Of rosy grape-juice take one pint or twain;
Sufis, you say, must not take this or that,
Then go and eat the pebbles off the plain!`,
  },
  {
    title: 'Tab 2',
    content: `Yon rising Moon that looks for us again -
How oft hereafter will she wax and wane;
How oft hereafter rising look for us
Through this same Garden – and for one in vain!`,
  },
  {
    title: 'Tab 3',
    content:
`To wise and worthy men your life devote,
But from the worthless keep your walk remote;
Dare to take poison from a sage's hand,
But from a fool refuse an antidote.`,
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
