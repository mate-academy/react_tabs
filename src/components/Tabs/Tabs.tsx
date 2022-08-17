import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[]
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  function clickTab(tab: Tab, event: React.FormEvent) {
    event.preventDefault();
    onTabSelected(tab);
  }

  return (
    <ul>
      {tabs.map((tab) => (
        <li
          className={classNames('', { 'is-active': tab.id === selectedTabId })}
          key={tab.id}
          data-cy={tab.content}
        >
          <a
            href={tab.id}
            onClick={(event) => clickTab(tab, event)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
