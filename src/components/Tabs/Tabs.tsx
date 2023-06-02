import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTabId: string;
  setSelectedTabId: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs, setSelectedTabId, selectedTabId,
}) => {
  const onTabSelected = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      setSelectedTabId(tab);
    }
  };

  return (
    <>
      {tabs.map((tab) => {
        return (
          <li
            key={tab.id}
            data-cy="Tab"
            className={selectedTabId === tab.id
              ? 'is-active'
              : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </>

  );
};
