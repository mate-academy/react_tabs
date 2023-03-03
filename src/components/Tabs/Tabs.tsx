import classNames from 'classnames';

type TabsType = {
  id: string;
  title: string;
  content: string;
};

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: {
  tabs: TabsType[];
  selectedTabId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({ 'is-active': tab.id === selectedTabId })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            id={tab.id}
            onClick={(event) => onTabSelected(event.currentTarget.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
