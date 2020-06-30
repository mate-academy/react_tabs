import React from 'react';
import Tabs from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    // eslint-disable-next-line max-len
    content: 'Elit duis porttitor cras venenatis taciti morbi nunc, scelerisque leo iaculis hendrerit faucibus sagittis, ornare nam curae tempor aliquam non',
  },
  {
    title: 'Tab 2',
    // eslint-disable-next-line max-len
    content: 'Eros viverra dui hendrerit aliquam varius curabitur vivamus aliquam nibh ut augue, posuere in urna quam aenean massa orci rutrum sit faucibus',
  },
  {
    title: 'Tab 3',
    // eslint-disable-next-line max-len
    content: 'Donec platea viverra urna orci sem donec velit nibh, sociosqu est lorem tristique massa suscipit sapien lacus adipiscing, faucibus adipiscing viverra fringilla viverra nullam integer',
  },
];

const App = () => (
  <Tabs tabs={tabs} index={0} />
);

export default App;
