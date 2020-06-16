import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './components/Tab/Tab';

// eslint-disable-next-line no-unused-vars

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs>
      <Tab title="Home">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quis nobis accusantium dignissimos deserunt laudantium iste,
        quo at minus adipisci cupiditate quaerat,
        impedit aliquid labore in quibusdam? Rerum illo voluptate hic?
      </Tab>
      <Tab title="About us">
        Officiis quod, tenetur alias rerum quam adipisci expedita,
        repellendus culpa et pariatur voluptatum asperiores at sed
        eaque cumque quibusdam rem vero laboriosam distinctio reiciendis dicta!
        Facilis, dolorem est! Doloribus, vitae.
      </Tab>
      <Tab title="Service">
        Eaque libero dignissimos necessitatibus accusantium,
        voluptatum molestiae nesciunt tempora quam nulla odio ut aliquid
        sint quas aliquam perspiciatis qui esse?
        Quibusdam tenetur impedit excepturi consequatur,
        odio doloremque facere enim doloribus.
      </Tab>
    </Tabs>
  </>
);

export default App;
