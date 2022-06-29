import { FC } from 'react';

interface TabsProps {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<TabsProps> = ({ onTabSelected, tabs }) => (
  <div className="tabs is-centered is-toggle is-large App__Tab">
    <ul>
      {tabs.map(tab => (
        <li
          className="is-active"
          key={tab.id}
        >
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onTabSelected(tab);
            }}
          >
            <span>{tab.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
