import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const validTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const handleClick = (tab: Tab) => {
    if (tab.id !== validTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({ 'is-active': id === validTab.id })}
                key={id}
                data-cy="Tab"
              >
                <a href={`#${id}`} data-cy="TabLink" onClick={() => handleClick(tab)}>{title}</a>
              </li>
            );
          })}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validTab.content}
      </div>
    </div>
  );
};
