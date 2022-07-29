import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId:string;
  setSelectedTabId: React.Dispatch<React.SetStateAction<string>>;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    setSelectedTabId,
  },
) => {
  const tabClickHandler
  = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    elementId: string) => {
    e.preventDefault();
    setSelectedTabId(elementId);
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(element => (
              <li
                className={selectedTabId === element.id ? 'is-active' : ''}
                key={element.id}
              >
                <a
                  href={element.id}
                  onClick={(e) => {
                    tabClickHandler(e, element.id);
                  }}
                >
                  {element.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(el => el.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
