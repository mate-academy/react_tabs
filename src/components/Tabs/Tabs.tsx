import cn from 'classnames';
import { Tabtype } from '../../Types/Tabtype';

type Props = {
  tabs: Tabtype[];
  onSelect: (selectId: string) => void;
  selectedId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, onSelect, selectedId }) => {
  const getSelectedContent = () => {
    const selectedTab = tabs.find(tab => tab.id === selectedId);

    return selectedTab ? selectedTab.content : '';
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn('', {
                'is-active': selectedId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== selectedId) {
                    onSelect(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {getSelectedContent()}
      </div>
    </div>
  );
};
