import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  tabs: Tab[];
  selectedTabById: string;
  changeTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabById, changeTab } = props;

  return (
    <>
      <ul className="d-flex justify-content-center">
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <a
              onClick={(event) => {
                event.preventDefault();
                if (selectedTabById !== tab.id) {
                  changeTab(tab);
                }
              }}
              className="border text-decoration-none px-5 py-2"
              href={selectedTabById}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <p
        className="text-center"
      >
        {tabs.find(tab => tab.id === selectedTabById)?.content}
      </p>
    </>
  );
};
