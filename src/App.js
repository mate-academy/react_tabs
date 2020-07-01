/* eslint-disable max-len */
import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.css';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc lorem, suscipit quis lectus eget, sagittis sagittis purus. Maecenas id libero sit amet nibh lobortis accumsan non at leo. Sed luctus, odio ac convallis egestas, nisi ex facilisis nulla, eu lobortis ligula elit in arcu. Nam quis sapien eu massa porttitor ultricies at et odio. In hac habitasse platea dictumst. Nullam scelerisque ac nunc vitae pulvinar. Etiam quis fringilla erat. Etiam vitae ex nisl.',
  },
  {
    title: 'Tab 2',
    content: 'Proin placerat tempus lacinia. Phasellus at varius elit. Maecenas vulputate rhoncus est egestas ornare. Etiam nec risus pharetra dui rutrum viverra. In efficitur ipsum sit amet mi tincidunt imperdiet. Nam id est quis ante dictum faucibus non sed mi. Suspendisse potenti. Nunc ultricies mollis risus cursus porttitor.',
  },
  {
    title: 'Tab 3',
    content: 'Nulla vehicula erat vel elit ultrices, et consequat dui ornare. Nam a placerat erat. Integer rutrum nibh lectus, eget maximus leo iaculis in. Duis eget enim justo. Vestibulum arcu purus, tempus nec convallis dignissim, semper commodo dui. Sed congue elementum dui, vitae maximus ipsum auctor et. Praesent et metus eu magna interdum porta sit amet tempor nisl. Sed tortor est, hendrerit vel efficitur in, sollicitudin ut libero. Cras ut ultricies erat. Pellentesque sapien lorem, aliquam in pretium sit amet, sagittis quis urna. Mauris auctor ex enim, non commodo tortor pharetra eget.',
  },
];

const App = () => (
  <Tabs tabs={tabs} index={0} />
);

export default App;
