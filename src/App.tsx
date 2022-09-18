import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  // const [tabs, setTabs] = useState([1]);

  const copyTabs = [...tabs];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is Tab ${title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {copyTabs.map(tab => (
              <li
                className="is-active"
                data-cy="Tab"
                key={tab.id}
              >
                <a href={`#tab-${tab.id}`} data-cy="TabLink">{tab.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Some text 1
          {/* {copyTabs.content} */}
        </div>
      </div>
    </div>
  );
};
