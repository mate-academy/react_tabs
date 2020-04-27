import React from 'react';
import './App.css';
import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 0,
    title: 'Home',
    content: `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Consequuntur deserunt
    eius ipsa laborum, nam, nesciunt nihil nobis
    qui quo quod sequi temporibus ullam veritatis.
    Aperiam aspernatur blanditiis eius illo soluta.`,
  },
  {
    id: 1,
    title: 'Profile',
    content: `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Autem delectus eum illum iste
    pariatur placeat reprehenderit tempore. Eos nihil
    porro qui quos reiciendis rem repellendus voluptas voluptate!
    Esse, ipsum, magni.`,
  },
  {
    id: 2,
    title: 'Contact',
    content: `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Animi autem consequuntur cupiditate
    dignissimos dolor doloribus eaque esse ex, exercitationem
    harum in incidunt inventore laudantium magni perspiciatis
    quae similique tempora ullam?`,
  },
];

const App = () => (
  <div>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </div>
);

export default App;
