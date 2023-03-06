import classNames from 'classnames';

type TabsType = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: TabsType[];
  selectedTabId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<string>>;
};

type PropsTab = {
  tab: TabsType;
  selectedTabId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const Tab: React.FC<PropsTab> = ({
  tab,
  selectedTabId,
  onTabSelected,
}) => {
  const { id } = tab;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={classNames({ 'is-active': id === selectedTabId })}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        id={id}
        onClick={() => onTabSelected(id)}
      >
        {tab.title}
      </a>
    </li>
  );
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      {tabs.map((tab) => (
        <Tab
          tab={tab}
          onTabSelected={onTabSelected}
          selectedTabId={selectedTabId}
        />
      ))}
    </>
  );
};
