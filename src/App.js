import React from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 0,
    title: 'Home',
    // eslint-disable-next-line max-len
    content: 'Integer vitae eleifend ex. Nulla lobortis magna lacus, in tincidunt felis tempor eget. Etiam tristique consectetur est quis eleifend. Morbi lorem odio, accumsan quis augue et, consequat interdum dolor. Etiam sit amet turpis leo. In sit amet commodo purus. Morbi a posuere tellus, ac pharetra nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis augue nulla, vitae pulvinar nibh viverra commodo. Nullam sed odio sed augue mattis aliquam. In hac habitasse platea dictumst. Curabitur pretium purus ut libero pellentesque eleifend. ',
  },
  {
    id: 1,
    title: 'Profile',
    // eslint-disable-next-line max-len
    content: 'Vivamus non dolor non nunc gravida facilisis id vitae nibh. Nunc pharetra urna nec purus pulvinar condimentum. Aliquam erat volutpat. Donec ac nunc eget enim tempor venenatis non eget mi. Sed purus ligula, viverra id auctor vel, posuere ac dui. Nam ut purus a eros tincidunt tristique id nec risus. Aliquam id tortor congue, faucibus dolor in, tempus ipsum. Donec sit amet gravida lectus. Ut et varius lorem. Etiam eu purus eu sem pulvinar euismod. ',
  },
  {
    id: 2,
    title: 'Contact',
    // eslint-disable-next-line max-len
    content: 'Quisque aliquet sed urna at faucibus. Donec eget rhoncus nunc. Ut semper metus in justo auctor, quis venenatis turpis tincidunt. Duis sit amet diam ipsum. Aliquam eu est sed ex gravida bibendum. Donec euismod turpis a pulvinar consequat. Phasellus sed convallis arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
];

export const App = () => (
  <Tabs
    tabs={tabs}
  />
);
