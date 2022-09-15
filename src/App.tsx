import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [id, setId] = useState('tab-1');
  const [title, setTitle] = useState('Tab 1');
  const [content, setContent] = useState('Some text 1');

  const handleClick = (
    tabId: string,
    tabTitle: string,
    tabContent: string,
  ): void => {
    setId(tabId);
    setTitle(tabTitle);
    setContent(tabContent);
  };

  return (
    <div className="section">
      <Tabs
        tabs={tabs}
        onSelect={handleClick}
        tabId={id}
        tabTitle={title}
        tabContent={content}
      />
    </div>
  );
};
