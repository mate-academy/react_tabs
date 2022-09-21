/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import Tab from '../../types';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

const getTabById = (tabs: Tab[], tabId: string) => (
  tabs.find(tab => tab.id === tabId) || tabs[0]
);

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const { id: validSelectedTabId, content } = getTabById(tabs, selectedTabId);

  const handleClick = (id: string) => {
    if (id !== validSelectedTabId) {
      onTabSelected((getTabById(tabs, id)));
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classNames(
                { 'is-active': id === validSelectedTabId },
              )}
              data-cy="Tab"
              onClick={() => handleClick(id)}
            >
              <a href={`#${id}`} data-cy="TabLink">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
