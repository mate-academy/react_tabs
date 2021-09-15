import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}
export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;

  return (
    <>
      <ul className="row mx-auto w-75">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="col-4 d-flex flex-column"
          >
            <a
              href={tab.content}
              className="border border-secondary rounded text-decoration-none text-center"
              onClick={(event) => {
                event.preventDefault();
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center border border-top-0 rounded py-5 text-secondary">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
