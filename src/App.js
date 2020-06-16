import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars

const tabs = [
  {
    id: 0,
    title: 'Tab 1',
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Quis nobis accusantium dignissimos deserunt laudantium iste,
      quo at minus adipisci cupiditate quaerat,
      impedit aliquid labore in quibusdam? Rerum illo voluptate hic?`,
  },
  {
    id: 1,
    title: 'Tab 2',
    content: `Officiis quod, tenetur alias rerum quam adipisci expedita,
      repellendus culpa et pariatur voluptatum asperiores at sed
      eaque cumque quibusdam rem vero laboriosam distinctio reiciendis dicta!
      Facilis, dolorem est! Doloribus, vitae.`,
  },
  {
    id: 2,
    title: 'Tab 3',
    content: `Eaque libero dignissimos necessitatibus accusantium,
      voluptatum molestiae nesciunt tempora quam nulla odio ut aliquid
      sint quas aliquam perspiciatis qui esse?
      Quibusdam tenetur impedit excepturi consequatur,
      odio doloremque facere enim doloribus.`,
  },
];

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </>
);

export default App;
