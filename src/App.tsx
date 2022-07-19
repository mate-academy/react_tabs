import React, { useState } from 'react';

import './App.scss';
import Tabs from './Tabs';

export const tabs: Tab[] | undefined = [
  {
    id: 'tab-1', title: 'Home', content: `Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Curabitur tincidunt viverra urna non iaculis.
  Curabitur in mauris pulvinar, fringilla ipsum id, pellentesque augue.
  Suspendisse aliquam sit amet sem ut volutpat.
  Praesent quis leo sit amet eros rutrum vulputate.
  Quisque ornare.`,
  },
  {
    id: 'tab-2', title: 'Profile', content: `Your curriculum vitae (CV) or resume is often
  the first impression you’ll make on a prospective employer,
  and it’s important to stand out amongst the crowd. These templates
   provide a range of styles – classical, professional,
   academic, plain, fancy – which can be adapted to fit your
   personal preference. Sections for employment history, education,
   skills, experience, publications and interests can be`,
  },
  {
    id: 'tab-3', title: 'Contact', content: `This Contact Us page does two things well: it
  asks for only the information that is necessary
  (email address) and it displays a video that explains exactly
  how contacting the IMPACT team works. This is a helpful experience
   for the user especially if they are expecting a quick response.`,
  },
];

const App: React.FC = () => {
  const [selectedTabId,
    setSelectedTabId] = useState<string | undefined >(tabs[0].id);

  const onTabSelected = (tab: Tab) => {
    if (tab.id === selectedTabId) {
      return selectedTabId;
    }

    const findTab = tabs.find(t => t.id === tab.id);

    setSelectedTabId(findTab?.id);

    return findTab;
  };

  const selectedTabTitle = tabs.find(tab => tab.id === selectedTabId)?.title;

  return (
    <div className="App">
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTabTitle}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
