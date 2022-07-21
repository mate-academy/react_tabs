import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  const handlerOnClick = (tab: Tab) => {
    onTabSelected(tab);
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames({
            'is-active': tab.id === selectedTabId,
          })}
        >
          <a
            href={`#${selectedTabId}`}
            onClick={() => handlerOnClick(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
