import { Tab } from '../../Types/Tab';

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (event: React.MouseEvent, id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabElements = tabs.map(tab => (
    <li
      className={selectedTabId === tab.id ? 'is-active' : ''}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={tab.id}
        data-cy="TabLink"
        onClick={(event) => onTabSelected(event, tab.id)}
      >
        {tab.title}
      </a>
    </li>
  ));

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabElements}
      </ul>
    </div>
  );
};
