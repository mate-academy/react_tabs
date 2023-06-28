import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTabId: (id: string) => void;
  content?: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  content,
}) => {
  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                data-cy="Tab"
                key={tab.id}
                className={selectedTabId === tab.id
                  ? 'is-active'
                  : ''}
                onClick={() => setSelectedTabId(tab.id)}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </>
  );
};
