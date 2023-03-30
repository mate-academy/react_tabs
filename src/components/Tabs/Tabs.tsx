import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selected: Tab;
  onTabSelect: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  selectedTabId: string;
  setSelectedTabId: React.Dispatch<React.SetStateAction<string>>;
};

export const getTabById = (idToFind: string, tabsArr: Tab[]) => {
  return tabsArr.find(({ id }) => id === idToFind) || tabsArr[0];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selected,
  onTabSelect,
  selectedTabId,
  setSelectedTabId,
}) => {
  if (!tabs.some(({ id }) => id === selectedTabId)) {
    setSelectedTabId(tabs[0].id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={onTabSelect}
              >
                { tab.title }
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selected.content}
      </div>
    </div>
  );
};
