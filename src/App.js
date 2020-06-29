import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

const tabs = [
  {
    title: 'Home',
    content: `Lorem ipsum, pellentesque mauris vivamus integer duis
    non eros orci vitae, sagittis auctor nulla tellus et gravida
    tempus: rutrum sit vitae sem gravida. Tellus, massa vitae rutrum
    maecenas, rutrum amet donec ultricies porta nulla metus sagittis
     maecenas lectus nibh: fusce quam gravida. Sapien a diam eu, nam
     curabitur pellentesque in nibh ultricies nibh. Ultricies quisque
     eu, leo: orci molestie morbi orci ut duis, nam pellentesque integer
     lorem amet elementum. Quisque ut integer et sit eros eget proin
     bibendum, vitae donec auctor amet cursus. Congue morbi nulla
     sodales sit porta, ornare metus mattis pellentesque odio enim ut
     proin nec lectus tempus cursus.`,
  },
  {
    title: 'Profile',
    content: `Lorem ipsum vivamus mauris ut risus sapien, diam magna
    nec ultricies risus vivamus adipiscing integer. Sem magna adipiscing
     molestie - sodales eros, mauris duis, eget in diam at fusce odio
     ornare leo orci pellentesque porttitor malesuada in proin quisque.
     Commodo elementum sem justo sit ligula bibendum a in sapien at
     tempus massa. Risus ultricies sed malesuada nibh sapien fusce urna,
     justo, enim mattis et, eros malesuada congue molestie, sagittis,
     elementum auctor vivamus ut ligula.`,
  },
  {
    title: 'Contact',
    content: `Lorem ipsum elementum lectus leo auctor in tempus sit
    elementum, nec vivamus - tempus eget auctor nam porttitor. Ornare
    malesuada nulla elementum tempus malesuada integer quam ut morbi
    enim metus vivamus lectus bibendum lectus. Eget metus diam tellus
    eros, ligula - ut lorem pharetra commodo tellus donec leo ornare
    malesuada eget arcu: ut pharetra integer. Leo curabitur cursus porta
    elementum curabitur malesuada porta porttitor vulputate. Ornare
    nulla lectus: malesuada ipsum justo auctor massa quisque metus.
    Pharetra mattis pellentesque cursus bibendum cursus malesuada
    sapien nec massa sodales bibendum sodales: quam ipsum leo sodales
    at risus, mattis eget mauris arcu. Lorem, fusce at tempus curabitur,
    a magna - gravida sem in pharetra curabitur massa congue enim: in
    enim bibendum - ut sagittis duis integer.

    `,
  },
];

export const App = () => (
  <Tabs tabs={tabs} index={1} />
);
