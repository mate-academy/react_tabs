import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    id: 1,
    content: `Lorem ipsum vivamus — metus — enim —
    at maecenas bibendum nibh: lectus quisque orci donec,
    fusce — vulputate pharetra. Tellus, at ligula magna —
    malesuada adipiscing ornare, leo porta amet ut — lorem orci: porta,
    lorem sit enim sodales congue leo. Sodales morbi magna auctor lectus duis
    sit malesuada duis nam — maecenas vivamus auctor
    at pellentesque donec odio in sagittis.
    Massa: metus — ligula in elementum donec
    risus, mattis vitae duis tellus nibh in. Mattis integer
    proin lectus rutrum justo quam auctor: leo
    rutrum lectus curabitur proin, malesuada quisque arcu
    donec duis fusce enim integer porta. In porta sodales`,
  },
  {
    title: 'Profile',
    id: 2,
    content: `Justo ornare justo in lorem metus quam, duis adipiscing enim
    quam, et odio — quisque pellentesque pharetra lectus. A leo pharetra
    enim adipiscing duis curabitur sodales donec lorem nibh mauris commodo
    ultricies sapien arcu nulla: et sapien enim. Nec
    arcu eget sem gravida, diam, sit at justo, vivamus ma`,
  },
  {
    title: 'Contact',
    id: 3,
    content: `Massa mauris duis ut nec mauris commodo orci metus
    vitae quam, at vulputate tempus. Diam quam vivamus, ornare malesuada quisque
    malesuada, bibendum, donec magna adipiscing in non urna, porta, nulla risus
    proin eu nulla nec sagittis magna orci auctor. Gravida ut maecenas
    molestie in elementum — leo nibh, porta, odio. Sodales, justo mauris
    massa eros enim mattis rutrum mauris sem ipsum nam pharetra`,
  },
];

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </>
);

export default App;
