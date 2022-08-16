import cn from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Tab[],
  handleSelectTab: (id: string, e:React.MouseEvent<HTMLElement>)=>void,
  selectedTabs: string;
}

export const Tabs = (Props: Props) => {
  const { tabs, handleSelectTab, selectedTabs } = Props;

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabs })}
            >
              <a
                href={`#${tab.id}`}
                onClick={(e) => handleSelectTab(tab.id, e)}
              >
                {tab.title}

              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map(tab => (tab.id === selectedTabs && (
        <div
          className="block"
          data-cy="tab-content"
          key={tab.id}
        >
          {tab.content}
        </div>
      )))}
    </div>
  );
};
