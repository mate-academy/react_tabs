import React from 'react';
import './App.css';
import { Tab } from './components/Tab/Tab';

const tabs = [
  {
    title: 'Home',
    content: `Lorem ipsum dolor
    sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim
    id est laborum.`,
  },
  {
    title: 'Profile',
    content: `Sed ut perspiciatis, unde omnis iste natus
    error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam eaque ipsa, quae ab illo inventore veritatis
    et quasi architecto beatae vitae dicta sunt, explicabo.
    Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
    aut odit aut fugit, sed quia consequuntur magni dolores eos,
    qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
    qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
    velit, sed quia non numquam eius modi tempora incidunt, ut labore
    et dolore magnam aliquam quaerat voluptatem.`,
  },
  {
    title: 'Contact',
    content: `Ut enim ad minima veniam,
    quis nostrum exercitationem ullam corporis suscipit
    laboriosam, nisi ut aliquid ex ea commodi consequatur?
    Quis autem vel eum iure reprehenderit, qui in ea voluptate
    velit esse, quam nihil molestiae consequatur, vel illum,
    qui dolorem eum fugiat, quo voluptas nulla pariatur?
    At vero eos et accusamus et iusto odio dignissimos ducimus,
    qui blanditiis praesentium voluptatum deleniti atque corrupti,
    quos dolores et quas molestias excepturi sint, obcaecati
    cupiditate non provident, similique sunt in culpa, qui officia
    deserunt mollitia animi, id est laborum et dolorum fuga. `,
  },
];

export const App = () => (
  <Tab tabs={tabs} />
);
