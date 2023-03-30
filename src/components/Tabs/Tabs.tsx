import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selected: Tab;
  selectTabById: React.Dispatch<React.SetStateAction<string>>;
  selectedTabId: string;
};

export const getTabById = (idToFind: string, tabsArr: Tab[]) => {
  return tabsArr.find(({ id }) => id === idToFind) || tabsArr[0];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selected,
  selectTabById,
  selectedTabId,
}) => {
  const onTabSelect = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const { target } = event;

    const { attributes } = target as HTMLAnchorElement;

    const href = attributes[0].value;

    const id = getTabById(href.slice(1), tabs).id || tabs[0].id;

    if (!(href.slice(1) === selectedTabId)) {
      selectTabById(id);
    }
  };

  if (!tabs.some(({ id }) => id === selectedTabId)) {
    selectTabById(tabs[0].id);
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
